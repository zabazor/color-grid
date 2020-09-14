import { Component, OnInit } from '@angular/core';
import { SHAPES } from 'src/app/core/data';
import { Shape } from 'src/app/core/interfaces';

@Component({
  selector: 'app-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss'],
})
export class TileCardComponent implements OnInit {
  shape: Shape;

  constructor() {}

  ngOnInit(): void {
    this.shape = SHAPES[8];
  }
}
