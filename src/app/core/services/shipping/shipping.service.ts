import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Form from '../../models/form';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private http = inject(HttpClient);

  getShippingCosts(data: Form) {
    return this.http.post(`/api/countries/fee`, data);
  }
}
