import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, Tile } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { COLOR_CODES } from 'src/app/core/constants';
import { ColorRed, COLORS } from 'src/app/core/data/colors';

@Component({
  selector: 'cg-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss'],
})
export class PlayerGridComponent implements OnInit {
  @Input() selectedTile: Tile;
  @Output() removedSelectedTileEvent = new EventEmitter();

  grid: PlayerGrid;

  constructor() {}

  ngOnInit(): void {
    this.grid = new PlayerGrid();
  }

  placeTile(cell: PlayerGridCell): void {
    const selectedGridCells = this.getSelectedGridCells(cell);

    for (const selectedGridCell of selectedGridCells) {
      selectedGridCell.color = this.selectedTile.color;
    }

    // Clear all grid cells of hover

    this.removedSelectedTileEvent.emit();
  }

  hoverTile(cell: PlayerGridCell): void {
    const selectedGridCells = this.getSelectedGridCells(cell);

    // we need a temporary color shift somehow... Maybe just update the grid cell to have a hover color

    // Clear all other hovered cells that are not part of the selectedGridCells
  }

  // Add validation in this so if the player is selecting the edge of the grid, the tile center shifts away from that edge
  getSelectedGridCells(cell: PlayerGridCell): PlayerGridCell[] {
    const gridCellsToFill = [];
    let tileRowOffset = -1;

    for (const tileRow of this.selectedTile.shape.layout.rows) {
      let tileCellOffset = -1;
      for (const tileCell of tileRow) {
        if (tileCell) {
          const gridRowIndex = cell.rowIndex + tileRowOffset;
          const gridCellIndex = cell.cellIndex + tileCellOffset;
          gridCellsToFill.push(this.grid.rows[gridRowIndex][gridCellIndex]);
          // Maybe instead, have this add a call back function that tells us what to do here
          // This might be helpful because we want to fill hovered cells and un-fill not hovered cells on hover
          // and we want to apply color and remove all hover cells on clock
        }
        tileCellOffset++;
      }
      tileRowOffset++;
    }

    return gridCellsToFill;
  }
}
