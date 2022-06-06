import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeatmapPageComponent } from './heatmap-page/heatmap-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeatmapPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
