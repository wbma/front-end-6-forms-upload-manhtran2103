import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class MediaService {
  baseUrl = 'http://media.mw.metropolia.fi/wbma/';
  constructor(public http: HttpClient) { }
  get_login_data(credentials){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl+"login",credentials, {headers: headers});
  }

  getUserData(token){
    const headers = new HttpHeaders().set('x-access-token', `${token}`)
    return this.http.get(this.baseUrl+"users/user", {headers: headers});
  }
}
