import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import { GameEngineService } from 'src/app/core/services';
import { TileManagerService } from '../core/services/tile-manager-service/tile-manager.service';

@Component({
  selector: 'cg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  // Keep globals here until we want to use a storage service
  // Or make a service with a global inside it
  tiles: Tile[];
  players = [1, 2, 3, 4];

  // Probably should only be on the tray component
  removedTileCount: number;
  selectedTile: Tile;

  constructor(private tileManagerService: TileManagerService) {}

  ngOnInit(): void {
    this.selectedTile = null;
    this.drawTilesPerPlayers();
  }

  tileSelected(selectedTile: Tile): void {
    this.selectedTile = selectedTile;
  }
  // This should be at the Game Board Level
  drawTilesPerPlayers(): void {
    this.tiles = [];

    this.removedTileCount = 0;

    let i = 0;
    for (i; i < this.players.length + 1; i++) {
      this.tiles.push(this.tileManagerService.drawATile());
    }
  }

  // This should be moved up to Game Board
  removeSelectedTile(): void {
    if (!this.selectedTile.removed) {
      this.selectedTile.removed = true;
      this.removedTileCount = this.removedTileCount + 1;
      if (this.removedTileCount >= this.tiles.length - 1) {
        // This works for now
        // TODO: this will probably be triggered by the last player placing the tile in their grid
        // Then the Round will restart, resetting the tray
        this.drawTilesPerPlayers();
      }
    }
  }
}
