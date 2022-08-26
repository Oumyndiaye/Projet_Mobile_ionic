import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:8000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  token:string
  email:string
  constructor(private httpClient: HttpClient,public router: Router){}
  login(user: User) {
    // console.log(user);
     return this.httpClient.post<any>(`${this.API_URL}/api/login_check`, user)
   }
   getRole()
  {
     return this.getDecodedAccessToken(this.getAccessToken()).roles[0]
  }
   isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  logout() {
    localStorage.removeItem('access_token')  
      this.router.navigate(["login"]); 
  }
  
  getDecodedAccessToken (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
  getAccessToken() {
    this.token=localStorage.getItem('access_token')
    return this.token ;
  }
 
}    
 







