import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CatalogueService } from '../services/catalogue.service';
import { InterceptorService } from '../services/interceptor.service';
import { User } from '../models/user'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  token:string
  isSubmitted = false;
  users:any[]=[]
  livreurs:any[]=[]
  livraisons:any[]=[]
  commande:any
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public interceptor:InterceptorService,
    public catalogueService:CatalogueService,
    public http:HttpClient
  ) 
  {
    this.loginForm= this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]] 
    })
  }
  ngOnInit() 
  {
    this.interceptor.getUsers().subscribe(data=>
      {
      this.users=data
      }) 
      this.catalogueService.getLivreur().subscribe(data=>
        {
        this.livreurs=data
        })  
  }
  getRole()
  {
     return this.authService.getDecodedAccessToken(this.authService.getAccessToken()).roles[0]
  }
  getLogin()
  {
    return this.authService.getDecodedAccessToken(this.authService.getAccessToken()).username
  }
  getUser(emaile:string,users:User[])
  {
    const user = users.find(user=>{
      return user.email === emaile
    })
      return user
  }
  

  loginUser() 
  {
    this.isSubmitted = true;
    if (!this.loginForm.valid){
      console.log('Please provide all the required values!')
      return false;
    }
    else 
     {    
      this.authService.login(this.loginForm.value).subscribe((res)=>
      {
        localStorage.setItem('access_token', res.token)
        if (this.getRole()=="ROLE_CLIENT") 
        {
          this.router.navigate(["home"])
        }
        else if (this.getRole()=="ROLE_LIVREUR") 
        {
          this.router.navigate(["livraisons"])
        }
      }
  )}
}

addLivraison()
{
  this.http.get<any>('http://127.0.0.1:8000/api/livreurs/'+this.getUser(this.getLogin(),this.livreurs).id).subscribe(data => {
    this.livraisons= data.livraisons 
    this.livraisons.forEach(element => {
      console.log(element.id);
      this.commande=element.commande
      //console.log(this.commande);
    })  
    })
}   
}
