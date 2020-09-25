import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, Tile } from 'src/app/core/classes';
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
  @Input() selectedTile: Tile;
  @Output() removedSelectedTileEvent = new EventEmitter();

  grid: PlayerGrid;

  constructor() {}

  ngOnInit(): void {
    this.grid = new PlayerGrid();
  }

  placeTile(cell: PlayerGridCell): void {
    // Overly simplified - will probably need to use the row and cell values to find it in the grid and change others
    cell.color = this.selectedTile.color;
    this.removedSelectedTileEvent.emit();
  }
}
