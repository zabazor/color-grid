import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { GRID_SQUARE_LENGTH, SUBSCRIPTION_KEYS } from 'src/app/core/constants';
import { SubscriptionService, TileManagerService } from 'src/app/core/services';
import { deepClone } from 'src/app/core/utility-functions';
import { PlayerGridService } from './player-grid.service';

@Component({
  selector: 'cg-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss'],
})
export class PlayerGridComponent implements OnInit, OnDestroy {
  globalSelectedTile: Tile;
  selectedTile: Tile;

  grid: PlayerGrid;
  currentHoveredCells: PlayerGridCell[] = [];
  currentCell: PlayerGridCell;

  private tileSelectedSubscription;

  constructor(
    private playerGridService: PlayerGridService,
    private tileManagerService: TileManagerService,
    private subscriptionService: SubscriptionService
  ) {
    this.tileSelectedSubscription = this.subscriptionService
      .get(SUBSCRIPTION_KEYS.tileSelected)
      .subscribe((selectedTile) => {
        this.globalSelectedTile = selectedTile;
        this.selectedTile = deepClone(selectedTile);
        this.selectedTile.selected = false;
      });
  }

  ngOnInit(): void {
    this.grid = new PlayerGrid();
    this.clearSelectedTile();
  }

  ngOnDestroy(): void {
    this.tileSelectedSubscription.unsubscribe();
  }

  clickGrid(): void {
    this.placeTile(this.currentCell);
  }

  clickTile(cell: PlayerGridCell): void {
    this.placeTile(cell);
  }

  placeTile(cell: PlayerGridCell): void {
    if (this.selectedTile) {
      this.clearHover();
      const selectedGridCells = this.playerGridService.getSelectedGridCells(
        cell,
        this.selectedTile,
        this.grid
      );

      for (const selectedGridCell of selectedGridCells) {
        selectedGridCell.color = this.selectedTile.color;
      }

      this.subscriptionService.set(
        SUBSCRIPTION_KEYS.tileRemoved,
        this.globalSelectedTile
      );
      this.clearSelectedTile();
    }
  }

  hoverTile(cell: PlayerGridCell): void {
    if (this.selectedTile) {
      this.clearHover();
      this.currentCell = cell;
      const selectedGridCells = this.playerGridService.getSelectedGridCells(
        this.currentCell,
        this.selectedTile,
        this.grid
      );

      for (const selectedGridCell of selectedGridCells) {
        selectedGridCell.hoverColor = this.selectedTile.color;
        selectedGridCell.hovering = true;
      }

      this.currentHoveredCells = selectedGridCells;
    }
  }

  clearHover(): void {
    for (const cell of this.currentHoveredCells) {
      cell.hovering = false;
    }
  }

  clearSelectedTile(): void {
    this.selectedTile = null;
    this.selectedTile = this.tileManagerService.getBlankTile();
  }
}
