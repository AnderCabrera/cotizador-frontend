import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import UserLoginRequest from '../../models/userLoginRequest';
import User from '../../models/user';
import UserRegisterRequest from '../../models/userRegisterRquest';

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

  public logout() {
    this.currentUserSubject.next(null);
  }

  public register(data: UserRegisterRequest) {
    return this.http.post<UserRegisterRequest>('/api/users/register', data).pipe(
      tap((user) => this.currentUserSubject.next(user)),
      catchError((err) => {
        if (err.status === 400) {
          alert('Username already exists');
          throw new Error('Username already exists');
        }

        return throwError(() => err);
      }),
    );
  }
}
