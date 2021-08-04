import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8000/registration/user';
  errorData: {};
  redirectUrl: any;

  constructor(private http: HttpClient) {
  }

  create(data): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  login(data) {
    return this.http.post<any>(`http://localhost:8000/login/user`, data)
      .pipe(map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        })
      );
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  // login(data): Observable<any>{
  //   return this.http.post('http://localhost:8000/login/user', data);
  // }
}


