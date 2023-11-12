import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import UserLoginRequest from '../../models/userLoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  public login(data: UserLoginRequest) {
    return this.http.post('/api/users/login', data);
  }
}
