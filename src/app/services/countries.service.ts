import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private countries_api_url = '/api/countries';

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<any> {
    return this.http.get(this.countries_api_url);
  }
}
