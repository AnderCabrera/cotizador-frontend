import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesService } from './core/services/countries/countries.service';

import { HttpClientModule } from '@angular/common/http';
import { RegionsService } from './core/services/regions/regions.service';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DisplayShippingComponent } from './pages/display-shipping/display-shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingFormComponent,
    LoginComponent,
    RegisterComponent,
    DisplayShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    SweetAlert2Module
  ],
  providers: [CountriesService, RegionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
