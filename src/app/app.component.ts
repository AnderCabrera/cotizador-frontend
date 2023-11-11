import { Component } from '@angular/core';
import { CountriesService } from './core/services/countries/countries.service';

import Country from 'src/app/core/models/country';
import Region from './core/models/region';
import { RegionsService } from './core/services/regions/regions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private countriesService: CountriesService, private regionsService: RegionsService) {}

  public countries: Country[] = [];
  public regions: Region[] = [];

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data) => {
      data.forEach((country: Country) => {
        this.countries.push(country);
      });
    });

    this.regionsService.getRegions().subscribe((data) => {
      data.forEach((region: Region) => {
        this.regions.push(region);
      });
    });

    console.log(this.countries);
    console.log(this.regions);
  }
}
