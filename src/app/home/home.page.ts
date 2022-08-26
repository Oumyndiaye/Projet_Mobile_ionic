import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list:boolean=true
  card:boolean=false
 
  myImagePath = "https://cdn.sanity.io/images/czqk28jt/prod_bk_ch/c613bf5e3a486ba400b64a5d5fca9e09d1c9870e-1184x600.jpg?w=1125&q=40&fit=max&auto=format"
  catalogues:any[]=[]
 @Input() catalogue:any
 menus:any[]=[]
 burgers:any[]=[]
  ngOnInit(): void {
    this.catalogueService.getCatalogue().subscribe(data =>
      {
        this.catalogues=data
        this.burgers=data.burgers
        this.menus=data.menus
          //console.log(data.burgers);
    })  
  }
  constructor(private catalogueService:CatalogueService) {}
  valid1()
  {
    this.card=false
    this.list=false
  return this.list
  
  }
  valid2()
  {
    this.list=true
    this.card=true
    return this.card
  }
}
