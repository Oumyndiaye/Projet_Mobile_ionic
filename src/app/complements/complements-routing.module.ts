import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplementsPage } from './complements.page';

const routes: Routes = [
  {
    path: '',
    component: ComplementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplementsPageRoutingModule {}
