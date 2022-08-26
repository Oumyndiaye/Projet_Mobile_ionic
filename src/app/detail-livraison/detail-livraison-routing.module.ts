import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLivraisonPage } from './detail-livraison.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLivraisonPageRoutingModule {}
