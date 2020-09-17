import { Injectable } from '@angular/core';
import { Tile } from '../../classes';
import { FACING } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class TileTransformationService {
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
    // FACING.up is the default, so it is not changed
    if (tile.facing === FACING.right) {
      this.rotateRight(tile);
    } else if (tile.facing === FACING.left) {
      this.rotateLeft(tile);
    } else if (tile.facing === FACING.down) {
      // rewrite this as a single transformation
      this.rotateUpsideDown(tile);
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
  rotateRight(tile: Tile): Tile {
    const rows = tile.shape.layout.rows;
    const newRows = [];

    let cellIndex = 0;
    let newRowIndex = 0;
    for (newRowIndex; newRowIndex < rows[0].length; newRowIndex++) {
      newRows.push([]);
      let rowIndex = rows.length - 1;
      for (rowIndex; rowIndex >= 0; rowIndex--) {
        newRows[newRowIndex].push(rows[rowIndex][cellIndex]);
      }
      cellIndex++;
    }

    tile.shape.layout.rows = newRows;
    return tile;
  }

  /*
  Rotates with the following visual

    c1  c2 c3    Rotate Left     r1  r2 r3
  r1[ ][ ][ ]       __          c3[ ][ ][ ]
  r2[ ][ ][ ]     /    \        c2[ ][ ][ ]
  r3[ ][ ][ ]     V             c1[ ][ ][ ]

  */
  rotateLeft(tile: Tile): Tile {
    const rows = tile.shape.layout.rows;
    const newRows = [];

    let cellIndex = rows[0].length - 1;
    let newRowIndex = 0;
    for (newRowIndex; newRowIndex < rows[0].length; newRowIndex++) {
      newRows.push([]);
      let rowIndex = 0;
      for (rowIndex; rowIndex < rows.length; rowIndex++) {
        newRows[newRowIndex].push(rows[rowIndex][cellIndex]);
      }

      cellIndex--;
    }

    tile.shape.layout.rows = newRows;
    return tile;
  }

  /*
  Rotates with the following visual

    c1  c2 c3  Rotate Upside Down   c3  c2 c1
  r1[ ][ ][ ]     |   ^           r3[ ][ ][ ]
  r2[ ][ ][ ]     |   |           r2[ ][ ][ ]
  r3[ ][ ][ ]     V   |           r1[ ][ ][ ]

  */
  rotateUpsideDown(tile: Tile): Tile {
    const rows = tile.shape.layout.rows;
    const newRows = [];

    let rowIndex = rows.length - 1;
    let newRowIndex = 0;
    for (newRowIndex; newRowIndex < rows[0].length; newRowIndex++) {
      newRows.push([]);
      let cellIndex = rows[0].length - 1;
      for (cellIndex; cellIndex >= 0; cellIndex--) {
        newRows[newRowIndex].push(rows[rowIndex][cellIndex]);
      }

      rowIndex--;
    }

    tile.shape.layout.rows = newRows;
    return tile;
  }
}
