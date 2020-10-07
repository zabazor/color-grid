import { GRID_SQUARE_LENGTH } from '../constants';
import { ColorVoid } from '../data/colors';
import { Color } from './color.class';

export class PlayerGrid {
  rows: any[];

  constructor(rows?: any[]) {
    if (rows) {
      this.rows = rows;
    } else {
      this.rows = [];
      // Player Grids are a set 6X6 : for now
      let rowIndex = 0;
      for (rowIndex; rowIndex < GRID_SQUARE_LENGTH; rowIndex++) {
        const row = [];
        let cellIndex = 0;
        for (cellIndex; cellIndex < GRID_SQUARE_LENGTH; cellIndex++) {
          row.push(new PlayerGridCell(rowIndex, cellIndex));
        }
        this.rows.push(row);
      }
    }
  }
}

export class PlayerGridCell {
  rowIndex: number;
  cellIndex: number;
  color?: Color;
  hoverColor?: Color;
  hovering: boolean;

  constructor(rowIndex: number, cellIndex: number, color?: Color) {
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
    this.color = color ? color : ColorVoid;
    this.hoverColor = ColorVoid;
    this.hovering = false;
  }
}
