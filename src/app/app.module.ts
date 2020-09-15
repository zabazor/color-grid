import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExamplesModule } from './shared/examples/examples.module';
import { TileCardComponent } from './shared/tile-card/tile-card.component';
import { TileTrayComponent } from './shared/tile-tray/tile-tray.component';

@NgModule({
  declarations: [AppComponent, TileCardComponent, TileTrayComponent],
  imports: [BrowserModule, AppRoutingModule, ExamplesModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TileCardComponent, TileTrayComponent],
})
export class AppModule {}
