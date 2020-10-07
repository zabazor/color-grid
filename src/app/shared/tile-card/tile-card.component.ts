import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import { SUBSCRIPTION_KEYS } from 'src/app/core/constants';
import {
  TransformationService,
  SubscriptionService,
} from 'src/app/core/services';

@Component({
  selector: 'cg-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss'],
})
export class TileCardComponent implements OnInit {
  @Input() tile: Tile;

  constructor(
    private transformationService: TransformationService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.tile = this.transformationService.reflectTheTile(this.tile);
    this.tile = this.transformationService.rotateTheTile(this.tile);
  }

  clickTile(): void {
    this.subscriptionService.set(SUBSCRIPTION_KEYS.tileSelected, this.tile);
    this.tile.selected = true;
  }
}
