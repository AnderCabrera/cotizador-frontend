import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Country from '../../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private http = inject(HttpClient);

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`/api/countries/`);
  }
}
