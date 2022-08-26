import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService:AuthService ,private http:HttpClient) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //console.log(req);
    const accessToken = this.authService.getAccessToken();
     req = req.clone({
         setHeaders: {
             Authorization: `JWT $[accessToken}` 
         }
     });
     return next.handle(req);
 }
 public getUsers():Observable<any>
 {
   return this.http.get<any>("http://127.0.0.1:8000/api/users").pipe()
 }
}
export const AuthInterceptorProvider =
{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
}
