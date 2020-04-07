import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {} from '@angular/common/http';
import {GLOBAL} from './globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public token: string;
  public identity;

  constructor(
    // tslint:disable-next-line:variable-name
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  // tslint:disable-next-line:variable-name
  register(user_to_register) {
    let params = JSON.stringify(user_to_register);
    let headers = {'Content-Type': 'application/json'};
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };

    return this._http.post<any>(this.url + '\/register', params, requestOptions).pipe(map(res => res));

  }

  signup(userToLogin, gettoken = null) {
    if (gettoken != null) {
      userToLogin.gettoken = gettoken;
    }
    let params = JSON.stringify(userToLogin);
    let headers = {'Content-Type': 'application/json'};
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this._http.post<any>(this.url + '\/login', params, requestOptions).pipe(map(res => res));

  }

  getidentiy() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != undefined) {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token');
    // tslint:disable-next-line:triple-equals
    if (token != undefined) {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}
