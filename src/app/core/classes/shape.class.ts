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

export class ShapeLayout {
  rows: any[];

  constructor(row1: boolean[], row2: boolean[], row3: boolean[]) {
    this.rows = [];
    this.rows.push(row1);
    this.rows.push(row2);
    this.rows.push(row3);
  }
}
