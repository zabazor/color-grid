import { COLOR_NAMES } from '../constants/colors.constants';
import { SHAPE_NAMES } from '../constants/shape.constants';

// Maybe split this into a TileShape and TileColor attribute, and let them be randomly selected
// Because any tile can come in any shape/color combination
// This whole thing could probably be generated on the fly with constants
export const TILES = [
  {
    name: 'Red L 1',
    code: 'red-L',
    color: COLOR_NAMES.red,
    shape: SHAPE_NAMES.L,
    rotation: 'position-1',
  },
];
