import { ClassField } from '@angular/compiler';
import { Color, Shape } from '.';

export class Tile {
  color: Color;
  shape: Shape;
  facing: string;
  reflection: boolean;

  constructor(
    color: Color,
    shape: Shape,
    facing: string,
    reflection?: boolean
  ) {
    this.color = color;
    this.shape = shape;
    this.facing = facing;
    this.reflection = reflection;
  }
}
