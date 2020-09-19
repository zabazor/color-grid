import { Injectable } from '@angular/core';
import { Tile } from '../../classes';
import { FACING } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class TransformationService {
  constructor() {}

  reflectTheTile(tile: Tile): Tile {
    if (tile.reflection && tile.shape.reflective) {
      for (const row of tile.shape.layout.rows) {
        row.reverse();
      }
    }
    return tile;
  }

  rotateTheTile(tile: Tile): Tile {
    // FACING.upWards is the default, so it is not changed
    if (tile.facing === FACING.right) {
      tile.shape.layout.rows = this.rotate2DArrayRight(tile.shape.layout.rows);
    } else if (tile.facing === FACING.left) {
      tile.shape.layout.rows = this.rotate2DArrayLeft(tile.shape.layout.rows);
    } else if (tile.facing === FACING.downWards) {
      tile.shape.layout.rows = this.rotate2DArrayUpsideDown(
        tile.shape.layout.rows
      );
    }
    return tile;
  }

  /*
  Rotates with the following visual

    c1  c2 c3    Rotate Right    r3  r2 r1
  r1[ ][ ][ ]       __           c1[ ][ ][ ]
  r2[ ][ ][ ]     /    \         c2[ ][ ][ ]
  r3[ ][ ][ ]          V         c3[ ][ ][ ]

  */
  rotate2DArrayRight(rows: any[]): any[] {
    const newRows = [];

    let cellIndex = 0;
    let newRowIndex = 0;
    for (newRowIndex; newRowIndex < rows[0].length; newRowIndex++) {
      newRows.push([]);
      // using the length - 1 as the index, lets us "reverse" the array
      let rowIndex = rows.length - 1;
      for (rowIndex; rowIndex >= 0; rowIndex--) {
        // Go through each row at the same cell index to swap cells with rows
        newRows[newRowIndex].push(rows[rowIndex][cellIndex]);
      }
      cellIndex++;
    }

    return newRows;
  }

  /*
  Rotates with the following visual

    c1  c2 c3    Rotate Left     r1  r2 r3
  r1[ ][ ][ ]       __          c3[ ][ ][ ]
  r2[ ][ ][ ]     /    \        c2[ ][ ][ ]
  r3[ ][ ][ ]     V             c1[ ][ ][ ]

  */
  rotate2DArrayLeft(rows: any[]): any[] {
    const newRows = [];

    // using the length - 1 as the index, lets us "reverse" the array
    let cellIndex = rows[0].length - 1;
    let newRowIndex = 0;
    for (newRowIndex; newRowIndex < rows[0].length; newRowIndex++) {
      newRows.push([]);
      let rowIndex = 0;
      for (rowIndex; rowIndex < rows.length; rowIndex++) {
        // Go through each row at the same cell index to swap cells with rows
        newRows[newRowIndex].push(rows[rowIndex][cellIndex]);
      }

      cellIndex--;
    }

    return newRows;
  }

  /*
  Rotates with the following visual

    c1  c2 c3  Rotate Upside Down   c3  c2 c1
  r1[ ][ ][ ]     |   ^           r3[ ][ ][ ]
  r2[ ][ ][ ]     |   |           r2[ ][ ][ ]
  r3[ ][ ][ ]     V   |           r1[ ][ ][ ]

  */
  rotate2DArrayUpsideDown(rows: any[]): any[] {
    const newRows = [];

    // using the length - 1 as the index, lets us "reverse" the array
    let rowIndex = rows.length - 1;
    let newRowIndex = 0;
    for (newRowIndex; newRowIndex < rows[0].length; newRowIndex++) {
      newRows.push([]);
      // using the length - 1 as the index, lets us "reverse" the array
      let cellIndex = rows[0].length - 1;
      for (cellIndex; cellIndex >= 0; cellIndex--) {
        newRows[newRowIndex].push(rows[rowIndex][cellIndex]);
      }

      rowIndex--;
    }

    return newRows;
  }
}
