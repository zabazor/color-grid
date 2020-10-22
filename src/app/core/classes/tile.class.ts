import { Color } from '.';

export class Tile {
  color: Color;
  shape: boolean[][];
  facing: string;
  reflection: boolean;
  selected: boolean;
  removed: boolean;

  constructor(
    color: Color,
    shape: boolean[][],
    facing: string,
    reflection?: boolean
  ) {
    this.color = color;
    this.shape = shape;
    this.facing = facing;
    this.reflection = reflection;
    this.selected = false;
    this.removed = false;
  }
}
