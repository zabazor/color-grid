import { SHAPE_CODES, SHAPE_NAMES } from '../constants/tile.constants';
import { Shape, ShapeLayout } from '../classes/shape.class';

export const SHAPES = [
  new Shape(
    SHAPE_NAMES.LBlock,
    SHAPE_CODES.LBlock,
    new ShapeLayout(
      [true, false, false],
      [true, false, false],
      [true, true, false]
    ),
    true
  ),
  new Shape(
    SHAPE_NAMES.IBlock,
    SHAPE_CODES.IBlock,
    new ShapeLayout(
      [true, true, true],
      [false, true, false],
      [true, true, true]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.TBlock,
    SHAPE_CODES.TBlock,
    new ShapeLayout(
      [true, true, true],
      [false, true, false],
      [false, true, false]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.singleCell,
    SHAPE_CODES.singleCell,
    new ShapeLayout(
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.square,
    SHAPE_CODES.square,
    new ShapeLayout(
      [true, true, false],
      [true, true, false],
      [false, false, false]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.dots,
    SHAPE_CODES.dots,
    new ShapeLayout(
      [true, false, true],
      [false, false, false],
      [true, false, true]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.donut,
    SHAPE_CODES.donut,
    new ShapeLayout(
      [true, true, true],
      [true, false, true],
      [true, true, true]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.cross,
    SHAPE_CODES.cross,
    new ShapeLayout(
      [false, true, false],
      [true, true, true],
      [false, true, false]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.XBlock,
    SHAPE_CODES.XBlock,
    new ShapeLayout(
      [true, false, true],
      [false, true, false],
      [true, false, true]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.smallEdge,
    SHAPE_CODES.smallEdge,
    new ShapeLayout(
      [true, true, false],
      [true, false, false],
      [false, false, false]
    ),
    true
  ),
  new Shape(
    SHAPE_NAMES.largeEdge,
    SHAPE_CODES.largeEdge,
    new ShapeLayout(
      [true, true, true],
      [true, false, false],
      [true, false, false]
    ),
    true
  ),
  new Shape(
    SHAPE_NAMES.wedge,
    SHAPE_CODES.wedge,
    new ShapeLayout(
      [true, true, true],
      [true, true, false],
      [true, false, false]
    ),
    true
  ),
  new Shape(
    SHAPE_NAMES.pipe,
    SHAPE_CODES.pipe,
    new ShapeLayout(
      [false, true, false],
      [false, true, false],
      [false, true, false]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.ZBlock,
    SHAPE_CODES.ZBlock,
    new ShapeLayout(
      [true, true, false],
      [false, true, true],
      [false, false, false]
    ),
    true
  ),
  new Shape(
    SHAPE_NAMES.UBlock,
    SHAPE_CODES.UBlock,
    new ShapeLayout(
      [false, false, false],
      [true, false, true],
      [true, true, true]
    ),
    false
  ),
  new Shape(
    SHAPE_NAMES.bBlock,
    SHAPE_CODES.bBlock,
    new ShapeLayout(
      [true, false, false],
      [true, true, false],
      [true, true, false]
    ),
    true
  ),
];
