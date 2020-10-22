import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { SUBSCRIPTION_KEYS } from 'src/app/core/constants';
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
  selectedTileCanRotate: boolean;

  grid: PlayerGrid;
  currentHoveredCells: PlayerGridCell[] = [];
  currentCell: PlayerGridCell;

  private tileSelectedSubscription;
  private rightArrowDownSubscription;
  private leftArrowDownSubscription;

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
        this.selectedTileCanRotate = this.tileManagerService.canTileRotate(
          selectedTile
        );
      });

    this.rightArrowDownSubscription = this.subscriptionService
      .get(SUBSCRIPTION_KEYS.rightArrowDown)
      .subscribe(() => {
        this.rotateTileRight();
        if (this.currentCell) {
          this.hoverTile(this.currentCell);
        }
      });

    this.leftArrowDownSubscription = this.subscriptionService
      .get(SUBSCRIPTION_KEYS.leftArrowDown)
      .subscribe(() => {
        this.rotateTileLeft();
        if (this.currentCell) {
          this.hoverTile(this.currentCell);
        }
      });
  }

  ngOnInit(): void {
    this.grid = new PlayerGrid();
    this.clearSelectedTile();
  }

  ngOnDestroy(): void {
    this.tileSelectedSubscription.unsubscribe();
    this.rightArrowDownSubscription.unsubscribe();
    this.leftArrowDownSubscription.unsubscribe();
  }

  clickGrid(): void {
    this.placeTile(this.currentCell);
  }

  clickTile(cell: PlayerGridCell): void {
    this.placeTile(cell);
  }

  rotateTileRight(): void {
    this.tileManagerService.rotateTileRight(this.selectedTile);
  }

  rotateTileLeft(): void {
    this.tileManagerService.rotateTileLeft(this.selectedTile);
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
    this.currentCell = null;
  }

  clearSelectedTile(): void {
    this.selectedTile = null;
    this.selectedTile = this.tileManagerService.getBlankTile();
  }
}
