export class Shape {
  name: string;
  code: string;
  layout: ShapeLayout;
  reflective: boolean;

  constructor(
    name: string,
    code: string,
    layout: ShapeLayout,
    reflective: boolean
  ) {
    this.name = name;
    this.code = code;
    this.layout = layout;
    this.reflective = reflective;
  }
}

// This is easier to visually see if it is a string, but probably easier to use if it is boolean
export class ShapeLayout {
  row1: boolean[];
  row2: boolean[];
  row3: boolean[];

  constructor(row1: boolean[], row2: boolean[], row3: boolean[]) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
  }
}
