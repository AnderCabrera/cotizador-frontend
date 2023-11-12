import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  cost!: number;

  ngOnInit() {
  }

  showCost(cost: number) {
    this.cost = cost;
  }
}
