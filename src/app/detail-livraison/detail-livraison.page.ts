import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-detail-livraison',
  templateUrl: './detail-livraison.page.html',
  styleUrls: ['./detail-livraison.page.scss'],
})
export class DetailLivraisonPage implements OnInit {
  livreurs:any[]=[]
  informations:any[]=[]
  livraisons:any[]=[]
  Onelivraison:any
  livraison:any
  commandes:any[]=[]
  constructor(private authService:AuthService,private http:HttpClient,private route:ActivatedRoute,private catalogueService:CatalogueService) { }

  ngOnInit() {

    this.http.get<any>('http://127.0.0.1:8000/api/users?email='+this.getLogin()).subscribe(data => {
      this.informations=data
      this.informations=data
      this.informations.forEach(element => {
      this.livraisons=  element.livraisons
      const livraisonId = +this.route.snapshot.params['id'];
      this.livraison=this.catalogueService.getLivraisonById(2,this.livraisons)
      console.log(livraisonId);
    })
    })


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
      this.livraisons=  element.livraisons
      this.livraisons.forEach(el => {
        this.Onelivraison=el
        this.commandes=this.Onelivraison.commande
        this.commandes.forEach(element => {
         // console.log(element);
        });
        });
      })

    })  
  }


}
