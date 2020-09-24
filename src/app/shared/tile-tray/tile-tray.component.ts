import { Component, OnInit } from '@angular/core';
import { COLOR_CODES, FACING } from 'src/app/core/constants';
import { SHAPES } from 'src/app/core/data';
import { ColorGreen, ColorPurple, ColorRed } from 'src/app/core/data/colors';
import { Tile } from 'src/app/core/classes';
import { GameEngineService } from 'src/app/core/services';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'cg-tile-tray',
  templateUrl: './tile-tray.component.html',
  styleUrls: ['./tile-tray.component.scss'],
})
export class TileTrayComponent implements OnInit {
  tile1: Tile;
  tile2: Tile;
  tile3: Tile;
  tile4: Tile;
  tile5: Tile;

  tiles: Tile[];
  // bad starting array to represent the number of players
  players = [1, 2, 3, 4];
  removedTileCount: number;

  constructor(private gameEngineService: GameEngineService) {}

  ngOnInit(): void {
    this.drawTilesPerPlayers();
  }

  drawTilesPerPlayers(): void {
    this.tiles = [];

    this.removedTileCount = 0;

    let i = 0;
    for (i; i < this.players.length + 1; i++) {
      this.tiles.push(this.gameEngineService.drawATile());
    }
  }

  tileRemoved(): void {
    this.removedTileCount = this.removedTileCount + 1;
    if (this.removedTileCount >= this.tiles.length - 1) {
      // This works for now
      // TODO: this will probably be triggered by the last player placing the tile in their grid
      // Then the Round will restart, resetting the tray
      this.drawTilesPerPlayers();
    }
  }

  tileSelected(): void {
    for (const tile of this.tiles) {
      tile.selected = false;
    }
  }
}
