import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import { TransformationService } from 'src/app/core/services';

@Component({
  selector: 'cg-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss'],
})
export class TileCardComponent implements OnInit {
  @Input() tile: Tile;

  // @Output() tileRemovedEvent: EventEmitter<Tile> = new EventEmitter<Tile>();
  @Output() tileSelectedEvent: EventEmitter<Tile> = new EventEmitter<Tile>();

  constructor(private transformationService: TransformationService) {}

  ngOnInit(): void {
    this.tile = this.transformationService.reflectTheTile(this.tile);
    this.tile = this.transformationService.rotateTheTile(this.tile);
  }

  clickTile(): void {
    this.tileSelectedEvent.emit(this.tile);
    this.tile.selected = true;
  }
}
