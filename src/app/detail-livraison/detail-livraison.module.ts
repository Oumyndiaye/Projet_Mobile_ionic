import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLivraisonPageRoutingModule } from './detail-livraison-routing.module';

import { DetailLivraisonPage } from './detail-livraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLivraisonPageRoutingModule
  ],
  declarations: [DetailLivraisonPage]
})
export class DetailLivraisonPageModule {}
