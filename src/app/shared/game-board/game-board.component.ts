import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import { GameEngineService } from 'src/app/core/services';

@Component({
  selector: 'cg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  tiles: Tile[];
  removedTileCount: number;
  selectedTile: Tile;

  players = [1, 2, 3, 4];

  constructor(private gameEngineService: GameEngineService) {}

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
      this.tiles.push(this.gameEngineService.drawATile());
    }
  }

  // This should be moved up to Game Board
  removeSelectedTile(): void {
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
