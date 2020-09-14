import { ClassField } from '@angular/compiler';
import { Color, Shape } from '.';

export class Tile {
  color: Color;
  shape: Shape;
  facing: string;
  reflection: boolean;
}
