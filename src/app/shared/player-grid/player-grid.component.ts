import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import {
  PlayerGrid,
  PlayerGridCell,
} from 'src/app/core/classes/player-grid.class';
import { GRID_SQUARE_LENGTH, SUBSCRIPTION_KEYS } from 'src/app/core/constants';
import { SubscriptionService } from 'src/app/core/services';
import { PlayerGridService } from './player-grid.service';

@Component({
  selector: 'cg-player-grid',
  templateUrl: './player-grid.component.html',
  styleUrls: ['./player-grid.component.scss'],
})
export class PlayerGridComponent implements OnInit {
  @Input() selectedTile: Tile;

  grid: PlayerGrid;
  currentHoveredCells: PlayerGridCell[] = [];
  currentCell: PlayerGridCell;

  constructor(
    private playerGridService: PlayerGridService,
    private subscriptionService: SubscriptionService
  ) {
    this.subscriptionService
      .get(SUBSCRIPTION_KEYS.tileSelected)
      .subscribe((selectedTile) => {
        this.selectedTile = selectedTile;
      });
  }

  ngOnInit(): void {
    this.grid = new PlayerGrid();
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
        this.selectedTile
      );
      this.selectedTile = null;
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
}
