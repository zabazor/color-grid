import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { COLOR_CODES, FACING, SUBSCRIPTION_KEYS } from 'src/app/core/constants';
import { SHAPES } from 'src/app/core/data';
import { ColorGreen, ColorPurple, ColorRed } from 'src/app/core/data/colors';
import { Tile } from 'src/app/core/classes';
import {
  GameEngineService,
  SubscriptionService,
  TileManagerService,
} from 'src/app/core/services';

@Component({
  selector: 'cg-tile-tray',
  templateUrl: './tile-tray.component.html',
  styleUrls: ['./tile-tray.component.scss'],
})
export class TileTrayComponent implements OnInit, OnDestroy {
  @Input() players: any[];

  removedTileCount: number;
  tiles: Tile[];
  private tileRemovedSubscription;

  constructor(
    private tileManagerService: TileManagerService,
    private subscriptionService: SubscriptionService
  ) {
    this.tileRemovedSubscription = this.subscriptionService
      .get(SUBSCRIPTION_KEYS.tileRemoved)
      .subscribe(() => {
        const selectedTile = this.tileManagerService.getSelectedTile();
        this.removeSelectedTile(selectedTile);
      });
  }

  ngOnInit(): void {
    // This will need to be moved to a service and probably a class later
    this.players = [1, 2, 3, 4];
    this.drawTiles();
  }

  ngOnDestroy(): void {
    this.tileRemovedSubscription.unsubscribe();
  }

  drawTiles(): void {
    this.removedTileCount = 0;
    this.tiles = this.tileManagerService.drawTilesPerPlayers(this.players);
  }

  removeSelectedTile(selectedTile: Tile): void {
    if (!selectedTile.removed) {
      selectedTile.removed = true;
      this.removedTileCount = this.removedTileCount + 1;
      if (this.removedTileCount >= this.tiles.length - 1) {
        // TODO: this will probably be triggered by the last player placing the tile in their grid
        // Then the Round will restart, resetting the tray
        this.drawTiles();
        this.removedTileCount = 0;
      }
    }
  }

  tileSelected(selectedTile: Tile): void {
    let newSelectedTile = this.tileManagerService.getBlankTile();

    if (!selectedTile.selected) {
      newSelectedTile = selectedTile;
    }

    // Clear all tiles as Selected
    for (const tile of this.tiles) {
      tile.selected = false;
    }

    // Set the selected tile as selected, if it is the first click
    if (newSelectedTile) {
      newSelectedTile.selected = true;
    }

    // Update the site with the new selection
    this.tileManagerService.setSelectedTile(newSelectedTile);
    this.subscriptionService.set(
      SUBSCRIPTION_KEYS.tileSelected,
      newSelectedTile
    );
  }
}
