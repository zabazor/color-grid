import { COLOR_CODES, COLOR_NAMES, COLOR_ICONS } from '../constants';
import { Color } from '../interfaces';

export const ColorRed = new Color(
  COLOR_NAMES.red,
  COLOR_CODES.red,
  COLOR_ICONS.red
);

export const ColorYellow = new Color(
  COLOR_NAMES.yellow,
  COLOR_CODES.yellow,
  COLOR_ICONS.yellow
);

export const ColorGreen = new Color(
  COLOR_NAMES.green,
  COLOR_CODES.green,
  COLOR_ICONS.green
);

export const ColorBlue = new Color(
  COLOR_NAMES.blue,
  COLOR_CODES.blue,
  COLOR_ICONS.blue
);

export const ColorPurple = new Color(
  COLOR_NAMES.purple,
  COLOR_CODES.purple,
  COLOR_ICONS.purple
);

export const COLORS = [
  ColorRed,
  ColorYellow,
  ColorGreen,
  ColorBlue,
  ColorPurple,
];
