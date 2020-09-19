import { Component, OnInit } from '@angular/core';
import { COLOR_CODES, FACING } from 'src/app/core/constants';
import { SHAPES } from 'src/app/core/data';
import { ColorGreen, ColorPurple, ColorRed } from 'src/app/core/data/colors';
import { Tile } from 'src/app/core/classes';
import { GameEngineService } from 'src/app/core/services';

@Component({
  selector: 'cg-tile-tray',
  templateUrl: './tile-tray.component.html',
  styleUrls: ['./tile-tray.component.scss'],
})
export class TileTrayComponent implements OnInit {
  tile: Tile;

  constructor(private gameEngineService: GameEngineService) {}

  ngOnInit(): void {
    this.tile = this.gameEngineService.drawATile();
  }
}
