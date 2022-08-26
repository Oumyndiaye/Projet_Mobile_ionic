import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
private Catalogue_Url="http://127.0.0.1:8000/api/catalogues"
private Livraisons_Url="http://127.0.0.1:8000/api/livreurs"
private Livreurs_Url="http://127.0.0.1:8000/api/livreurs"
  constructor(private http:HttpClient) {}
  public getCatalogue():Observable<any>
  {
    return this.http.get<any>(this.Catalogue_Url)
  }
  public getLivraison():Observable<any>
  {
    return this.http.get<any>(this.Livraisons_Url)
  }
  public getLivreur():Observable<any>
  {
    return this.http.get<any>(this.Livreurs_Url)
  }
  getLivraisonById(LiraisonId: number,livraisons:any[]) 
  {
    const livraison = livraisons.find(livraison => {
     return livraison.id === LiraisonId
    })      
    return livraison
   }
}
