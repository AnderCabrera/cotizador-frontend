import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import UserLoginRequest from '../../models/userLoginRequest';
import User from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private currentUserSubject = new BehaviorSubject<User | any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  public login(data: UserLoginRequest) {
    return this.http.post<UserLoginRequest>('/api/users/login', data).pipe(
      tap((user) => this.currentUserSubject.next(user)),
      catchError((err) => {
        throw err;
      }),
    );
  }
}
