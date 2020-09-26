import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExamplesModule } from './shared/examples/examples.module';
// tile tray is asking to be it's own module...
import { TileCardComponent } from './shared/tile-tray/tile-card/tile-card.component';
import { TileTrayComponent } from './shared/tile-tray/tile-tray.component';
import { PlayerGridComponent } from './shared/player-grid/player-grid.component';
import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TileCardComponent,
    TileTrayComponent,
    PlayerGridComponent,
    GameBoardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ExamplesModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TileCardComponent, TileTrayComponent],
})
export class AppModule {}
