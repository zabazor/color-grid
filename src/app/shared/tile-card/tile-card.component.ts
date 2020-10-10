import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import { SUBSCRIPTION_KEYS } from 'src/app/core/constants';
import {
  TransformationService,
  SubscriptionService,
  TileManagerService,
} from 'src/app/core/services';

@Component({
  selector: 'cg-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss'],
})
export class TileCardComponent implements OnInit {
  @Input() tile: Tile;
  @Input() displayOnly: boolean;
  @Output() tileSelectedEvent = new EventEmitter();

  constructor(
    private transformationService: TransformationService,
    private tileManagerService: TileManagerService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.tile = this.transformationService.reflectTheTile(this.tile);
    this.tile = this.transformationService.rotateTheTile(this.tile);
  }

  clickTile(): void {
    if (!this.displayOnly) {
      this.tileSelectedEvent.emit(this.tile);
    }
  }
}
