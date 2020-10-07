import { Injectable } from '@angular/core';
import { Tile } from '../../classes';
import { COLORS, FACINGS, SHAPES } from '../../data';
import { deepClone } from '../../utility-functions';

@Injectable({
  providedIn: 'root',
})
export class TileManagerService {
  constructor() {}

  drawATile(): Tile {
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
}
