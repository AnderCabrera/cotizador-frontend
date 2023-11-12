import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Region from '../../models/region';
@Injectable({
  providedIn: 'root'
})

export class RegionsService {
  private http = inject(HttpClient);

  public getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`/api/regions/`);
  }
}
