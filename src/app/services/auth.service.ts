import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthData} from '../models/AuthData';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  // login Api Call in Firebase Rest Api
  login(email: string, password: string): Observable<AuthData> {
    return this.http.post<AuthData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
      {email, password, returnSecureToken: true});
  }

  // Signup Api Call in Firebase Rest Api
  signUp(email: string, password: string): Observable<AuthData> {
    return this.http.post<AuthData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`,
      {email, password, returnSecureToken: true});
  }

  // Login User Details
  formateUser(data: AuthData) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }

  // Error Message Show with Cradantils Api
  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occured. Please try again';
    }
  }
}
