import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesService } from './core/services/countries/countries.service';

import { HttpClientModule } from '@angular/common/http';
import { RegionsService } from './core/services/regions/regions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountriesService, RegionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
