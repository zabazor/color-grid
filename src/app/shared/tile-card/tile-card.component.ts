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

  @Output() tileRemoved = new EventEmitter();
  @Output() tileSelected = new EventEmitter();

  constructor(private transformationService: TransformationService) {}

  ngOnInit(): void {
    this.tile = this.transformationService.reflectTheTile(this.tile);
    this.tile = this.transformationService.rotateTheTile(this.tile);
  }

  displayEmptyTile(): void {
    if (this.tile.selected) {
      // This will probably be triggered when the tile is placed in the grid
      this.tile.removed = true;

      this.tileRemoved.emit();
    }

    this.tileSelected.emit();
    this.tile.selected = true;
  }

  clickTile(): void {
    this.displayEmptyTile();
  }
}
