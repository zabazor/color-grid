import { Component, OnInit } from '@angular/core';
import { COLOR_CODES } from 'src/app/core/constants';

@Component({
  selector: 'cg-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss'],
})
export class PlayerGridComponent implements OnInit {
  grid: any[];

  constructor() {}

  ngOnInit(): void {
    this.grid = [];
    this.grid.push([
      COLOR_CODES.red,
      COLOR_CODES.orange,
      COLOR_CODES.yellow,
      COLOR_CODES.green,
      COLOR_CODES.blue,
      COLOR_CODES.purple,
      COLOR_CODES.void,
    ]);
    this.grid.push([
      COLOR_CODES.red,
      COLOR_CODES.orange,
      COLOR_CODES.yellow,
      COLOR_CODES.green,
      COLOR_CODES.blue,
      COLOR_CODES.purple,
      COLOR_CODES.void,
    ]);
    this.grid.push([
      COLOR_CODES.red,
      COLOR_CODES.orange,
      COLOR_CODES.yellow,
      COLOR_CODES.green,
      COLOR_CODES.blue,
      COLOR_CODES.purple,
      COLOR_CODES.void,
    ]);
    this.grid.push([
      COLOR_CODES.red,
      COLOR_CODES.orange,
      COLOR_CODES.yellow,
      COLOR_CODES.green,
      COLOR_CODES.blue,
      COLOR_CODES.purple,
      COLOR_CODES.void,
    ]);
    this.grid.push([
      COLOR_CODES.red,
      COLOR_CODES.orange,
      COLOR_CODES.yellow,
      COLOR_CODES.green,
      COLOR_CODES.blue,
      COLOR_CODES.purple,
      COLOR_CODES.void,
    ]);
    this.grid.push([
      COLOR_CODES.red,
      COLOR_CODES.orange,
      COLOR_CODES.yellow,
      COLOR_CODES.green,
      COLOR_CODES.blue,
      COLOR_CODES.purple,
      COLOR_CODES.void,
    ]);
  }
}
