import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.page.html',
  styleUrls: ['./livraisons.page.scss'],
})
export class LivraisonsPage implements OnInit {
  constructor(private catalogueService:CatalogueService,private authService:AuthService,private http:HttpClient) {}
  livreurs:any[]=[]
  informations:any[]=[]
  livraisons:any[]=[]
  Onelivraison:any
  commandes:any[]=[]
  ngOnInit() 
  {
      this.addLivraison()
  }
  getLogin()
  {
    return this.authService.getDecodedAccessToken(this.authService.getAccessToken()).username
  }
  addLivraison()
  {
    this.http.get<any>('http://127.0.0.1:8000/api/users?email='+this.getLogin()).subscribe(data => {
      this.informations=data
      this.informations=data
      this.informations.forEach(element => {
        //console.log(element);
        this.livraisons=  element.livraisons
          this.livraisons.forEach(el => {
          this.Onelivraison=el
          this.commandes=this.Onelivraison.commande
          this.commandes.forEach(element => {
          });
        });
      })
    })  
  }
 
  Terminer()
  {
    this.http.put<any>("http://127.0.0.1:8000/api/livraisons"+this.Onelivraison.id,{"etat":"terminer"})
  }
}
