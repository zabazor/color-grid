import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COLOR_CODES, FACING } from 'src/app/core/constants';
import { SHAPES } from 'src/app/core/data';
import { ColorGreen, ColorPurple, ColorRed } from 'src/app/core/data/colors';
import { Tile } from 'src/app/core/classes';
import { GameEngineService } from 'src/app/core/services';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'cg-tile-tray',
  templateUrl: './tile-tray.component.html',
  styleUrls: ['./tile-tray.component.scss'],
})
export class TileTrayComponent implements OnInit {
  @Input() selectedTile: Tile;
  @Input() tiles: Tile[];

  @Output() tileSelectedEvent: EventEmitter<Tile> = new EventEmitter<Tile>();
  // @Output() tileRemovedEvent: EventEmitter<Tile> = new EventEmitter<Tile>();

  constructor(private gameEngineService: GameEngineService) {}

  ngOnInit(): void {}

  tileSelected(selectedTile: Tile): void {
    // emit the event to the board
    this.tileSelectedEvent.emit(selectedTile);
    for (const tile of this.tiles) {
      tile.selected = false;
    }
  }
}
