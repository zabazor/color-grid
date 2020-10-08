import { Injectable } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { GRID_SQUARE_LENGTH } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root',
})
export class PlayerGridService {
  constructor() {}

  public getSelectedGridCells(
    cell: PlayerGridCell,
    selectedTile: Tile,
    grid: PlayerGrid
  ): PlayerGridCell[] {
    const gridCellsToFill = [];
    const initialOffsets = this.adjustInitialOffset(cell, selectedTile);

    let rowOffset = initialOffsets.rowOffsetInitialValue;

    for (const tileRow of selectedTile.shape.layout.rows) {
      let cellOffset = initialOffsets.cellOffsetInitialValue;
      for (const tileCell of tileRow) {
        if (tileCell) {
          const gridRowIndex = cell.rowIndex + rowOffset;
          const gridCellIndex = cell.cellIndex + cellOffset;
          gridCellsToFill.push(grid.rows[gridRowIndex][gridCellIndex]);
        }
        cellOffset++;
      }
      rowOffset++;
    }

    return gridCellsToFill;
  }

  public adjustInitialOffset(
    gridCell: PlayerGridCell,
    selectedTile: Tile
  ): any {
    let rowOffsetInitialValue = -1;
    let cellOffsetInitialValue = -1;
    const selectedTileRows = selectedTile.shape.layout.rows;
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
}
