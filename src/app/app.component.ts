import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: any;

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }
}
