import { Component, Input, OnInit } from '@angular/core';
import { FACING } from 'src/app/core/constants';
import { SHAPES } from 'src/app/core/data';
import { Shape, Tile } from 'src/app/core/classes';
import { TileTransformationService } from 'src/app/core/services';

@Component({
  selector: 'cg-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss'],
})
export class TileCardComponent implements OnInit {
  @Input() tile: Tile;

  constructor(private tileTransformationService: TileTransformationService) {}

  ngOnInit(): void {
    this.tile = this.tileTransformationService.reflectTheTile(this.tile);
    this.tile = this.tileTransformationService.rotateTheTile(this.tile);
  }
}
