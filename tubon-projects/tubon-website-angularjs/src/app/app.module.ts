import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { DichvuModule } from './achaucatering/dichvu/dichvu.module';
import { AchaucateringModule } from './achaucatering/achaucatering.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './services/app.service';
import { Nav1Component } from './achaucatering/nav1/nav1.component';
import { FooterComponent } from './achaucatering/footer/footer.component';
import { MapComponent } from './achaucatering/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    FooterComponent,
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3T-BlBd0ZXo8nOLXjy1wI3YgOKlvDzro'
    }),
    BrowserModule,
    AchaucateringModule,
    DichvuModule,
    AppRoutingModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
