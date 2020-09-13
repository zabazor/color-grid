import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootGridExampleComponent } from './boot-grid-example/boot-grid-example.component';

@NgModule({
  declarations: [BootGridExampleComponent],
  imports: [CommonModule],
  exports: [BootGridExampleComponent],
})
export class ExamplesModule {}
