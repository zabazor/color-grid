import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { COLOR_CODES } from 'src/app/core/constants';
import { ColorRed, COLORS } from 'src/app/core/data/colors';

@Component({
  selector: 'cg-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss'],
})
export class PlayerGridComponent implements OnInit {
  grid: PlayerGrid;

  constructor() {}

  ngOnInit(): void {
    this.grid = new PlayerGrid();
  }

  setColor(cell: PlayerGridCell): void {
    // Overly simplified - will probably need to use the row and cell values to find it in the grid and change others
    cell.color = ColorRed;
  }
}
