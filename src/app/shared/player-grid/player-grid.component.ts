import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, Tile } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { GRID_SQUARE_LENGTH } from 'src/app/core/constants';

@Component({
  selector: 'cg-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss'],
})
export class PlayerGridComponent implements OnInit {
  @Input() selectedTile: Tile;
  @Output() removedSelectedTileEvent = new EventEmitter();

  grid: PlayerGrid;
  currentHoveredCells: PlayerGridCell[] = [];
  currentCell: PlayerGridCell;

  constructor() {}

  ngOnInit(): void {
    this.grid = new PlayerGrid();
  }

  clickGrid(): void {
    this.placeTile(this.currentCell);
  }

  clickTile(cell: PlayerGridCell): void {
    this.placeTile(cell);
  }

  placeTile(cell: PlayerGridCell): void {
    if (this.selectedTile) {
      this.clearHover();
      const selectedGridCells = this.getSelectedGridCells(cell);

      for (const selectedGridCell of selectedGridCells) {
        selectedGridCell.color = this.selectedTile.color;
      }

      this.removedSelectedTileEvent.emit();
    }
  }

  hoverTile(cell: PlayerGridCell): void {
    if (this.selectedTile) {
      this.clearHover();
      this.currentCell = cell;
      const selectedGridCells = this.getSelectedGridCells(this.currentCell);

      for (const selectedGridCell of selectedGridCells) {
        selectedGridCell.hoverColor = this.selectedTile.color;
        selectedGridCell.hovering = true;
      }

      this.currentHoveredCells = selectedGridCells;
    }
  }

  clearHover(): void {
    for (const cell of this.currentHoveredCells) {
      cell.hovering = false;
    }
  }

  private adjustInitialOffset(gridCell: PlayerGridCell): any {
    let rowOffsetInitialValue = -1;
    let cellOffsetInitialValue = -1;
    const selectedTileRows = this.selectedTile.shape.layout.rows;
    const lastTileRowIndex = selectedTileRows.length - 1;
    const lastTileCellIndex = selectedTileRows[0].length - 1;

    let adjustTop = false;
    for (const tileCell of selectedTileRows[0]) {
      if (tileCell) {
        adjustTop = true;
      }
    }
    if (gridCell.rowIndex === 0 && adjustTop) {
      rowOffsetInitialValue = rowOffsetInitialValue + 1;
    }

    let adjustBottom = false;
    for (const tileCell of selectedTileRows[lastTileRowIndex]) {
      if (tileCell) {
        adjustBottom = true;
      }
    }
    if (gridCell.rowIndex === GRID_SQUARE_LENGTH - 1 && adjustBottom) {
      rowOffsetInitialValue = rowOffsetInitialValue - 1;
    }

    let adjustLeft = false;
    for (const tileRow of selectedTileRows) {
      if (tileRow[0]) {
        adjustLeft = true;
      }
    }
    if (gridCell.cellIndex === 0 && adjustLeft) {
      cellOffsetInitialValue = cellOffsetInitialValue + 1;
    }

    let adjustRight = false;
    for (const tileRow of selectedTileRows) {
      if (tileRow[lastTileCellIndex]) {
        adjustRight = true;
      }
    }
    if (gridCell.cellIndex === GRID_SQUARE_LENGTH - 1 && adjustRight) {
      cellOffsetInitialValue = cellOffsetInitialValue - 1;
    }

    return {
      rowOffsetInitialValue,
      cellOffsetInitialValue,
    };
  }

  // Add validation in this so if the player is selecting the edge of the grid, the tile center shifts away from that edge
  private getSelectedGridCells(cell: PlayerGridCell): PlayerGridCell[] {
    const gridCellsToFill = [];
    const initialOffsets = this.adjustInitialOffset(cell);

    let rowOffset = initialOffsets.rowOffsetInitialValue;

    for (const tileRow of this.selectedTile.shape.layout.rows) {
      let cellOffset = initialOffsets.cellOffsetInitialValue;
      for (const tileCell of tileRow) {
        if (tileCell) {
          const gridRowIndex = cell.rowIndex + rowOffset;
          const gridCellIndex = cell.cellIndex + cellOffset;
          gridCellsToFill.push(this.grid.rows[gridRowIndex][gridCellIndex]);
        }
        cellOffset++;
      }
      rowOffset++;
    }

    return gridCellsToFill;
  }
}
