import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExamplesModule } from './shared/examples/examples.module';
import { TileCardComponent } from './shared/tile-card/tile-card.component';

@NgModule({
  declarations: [AppComponent, TileCardComponent],
  imports: [BrowserModule, AppRoutingModule, ExamplesModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TileCardComponent],
})
export class AppModule {}
