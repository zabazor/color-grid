import { Injectable } from '@angular/core';
import { Tile } from '../../classes';
import { SHAPES } from '../../data';
import { COLORS } from '../../data/colors';
import { FACINGS } from '../../data/facings';

@Injectable({
  providedIn: 'root',
})
export class GameEngineService {
  constructor() {}

  drawATile(): Tile {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    const color = COLORS[colorIndex];

    const shapeIndex = Math.floor(Math.random() * SHAPES.length);
    const shape = SHAPES[shapeIndex];

    const facingIndex = Math.floor(Math.random() * FACINGS.length);
    const facing = FACINGS[facingIndex];

    const reflection = Math.floor(Math.random() * 2) === 1;

    return new Tile(color, shape, facing, reflection);
  }
}
