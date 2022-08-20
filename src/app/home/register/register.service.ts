import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  constructor(private httpClient: HttpClient) {}

  register(newUser: IUser): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/signUp', newUser);
  }
}
