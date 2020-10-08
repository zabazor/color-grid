import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/classes';
import { SubscriptionService, TileManagerService } from 'src/app/core/services';
import { SUBSCRIPTION_KEYS } from '../core/constants';

@Component({
  selector: 'cg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
