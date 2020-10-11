import { Injectable } from '@angular/core';
import { Tile } from '../../classes';
import { COLORS, ColorVoid, FACINGS, SHAPES, VOID_SHAPE } from '../../data';
import { deepClone } from '../../utility-functions';
import { TransformationService } from '../transformation-service/transformation.service';

@Injectable({
  providedIn: 'root',
})
export class TileManagerService {
  constructor(private transformationService: TransformationService) {}

  tiles: Tile[];
  selectedTile: Tile;
  removedTileCount: number;

  /**
   * getTiles
   * @description Returns the global tiles
   */
  public getTiles(): Tile[] {
    return this.tiles;
  }

  public setSelectedTile(selectedTile: Tile): void {
    this.selectedTile = selectedTile;
  }

  public getSelectedTile(): Tile {
    return this.selectedTile;
  }

  /**
   * drawTilesPerPlayers
   * @description Draws a new set of tiles based on the number of players
   */
  public drawTilesPerPlayers(players: number[]): Tile[] {
    this.tiles = [];
    this.selectedTile = null;

    this.removedTileCount = 0;

    let i = 0;
    for (i; i < players.length + 1; i++) {
      this.tiles.push(this.drawATile());
    }

    return this.tiles;
  }

  /**
   * drawATile
   * @description Draws a new tile card at random
   */
  private drawATile(): Tile {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    const color = COLORS[colorIndex];

    // Deep Clone because we may manipulate the Shape with transformations later
    // and we do not want to change the source of proof object
    const shapeIndex = Math.floor(Math.random() * SHAPES.length);
    const shape = deepClone(SHAPES[shapeIndex]);

    const facingIndex = Math.floor(Math.random() * FACINGS.length);
    const facing = FACINGS[facingIndex];

    const reflection = Math.floor(Math.random() * 2) === 1;

    return new Tile(color, shape, facing, reflection);
  }

  // This might go away at some point - not sure it will be needed
  public getBlankTile(): Tile {
    return new Tile(ColorVoid, VOID_SHAPE, FACINGS[0], false);
  }

  public rotateTileRight(selectedTile: Tile): Tile {
    selectedTile.shape.layout.rows = this.transformationService.rotate2DArrayRight(
      selectedTile.shape.layout.rows
    );

    return selectedTile;
  }

  public rotateTileLeft(selectedTile: Tile): Tile {
    selectedTile.shape.layout.rows = this.transformationService.rotate2DArrayLeft(
      selectedTile.shape.layout.rows
    );

    return selectedTile;
  }

  public canTileRotate(selectedTile: Tile): boolean {
    const initialTilePosition: Tile = deepClone(selectedTile);
    const rotatedTile: Tile = this.rotateTileRight(deepClone(selectedTile));

    // if after rotating the shape, if the cells do not match - it must be able to rotate
    let cellDoesNotMatch = false;
    let rowIndex = 0;
    for (
      rowIndex;
      rowIndex < selectedTile.shape.layout.rows.length;
      rowIndex++
    ) {
      let cellIndex = 0;
      for (
        cellIndex;
        cellIndex < selectedTile.shape.layout.rows[0].length;
        cellIndex++
      ) {
        if (
          initialTilePosition.shape.layout.rows[rowIndex][cellIndex] !==
          rotatedTile.shape.layout.rows[rowIndex][cellIndex]
        ) {
          cellDoesNotMatch = true;
          break;
        }
      }
      if (cellDoesNotMatch) {
        break;
      }
    }

    return cellDoesNotMatch;
  }
}
