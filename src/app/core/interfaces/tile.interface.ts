import { ClassField } from '@angular/compiler';
import { SHAPE_NAMES } from '../constants/tile.constants';

import { Shape } from './shape.interface';

export class Tile {
  color: string;
  shape: Shape;
  facing: string;
  reflection: boolean;
}
