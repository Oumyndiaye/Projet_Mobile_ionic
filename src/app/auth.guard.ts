import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  route:ActivatedRouteSnapshot
  url:any
  constructor(private authService:AuthService,private router:Router){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    if (this.authService.isLoggedIn() !== true) {
      window.alert("Access not allowed!");
      this.router.navigate(['login'])
    }
    this. getUtilisateur(this.route,this.url);
    return true;
  }
  getRole()
  {
     return this.authService.getDecodedAccessToken(this.authService.getAccessToken()).roles[0]
  }
  getUtilisateur(route:ActivatedRouteSnapshot,url:any){
    if (this.getRole()=="ROLE_CLIENT") 
    {
      this.router.navigate(["home"])
    }else if (this.getRole()==="ROLE_LIVREUR") 
    {
      this.router.navigate(["livraisons"])
    }
  }
}
