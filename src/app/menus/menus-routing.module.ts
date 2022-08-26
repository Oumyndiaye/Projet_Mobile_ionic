import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusPage } from './menus.page';


const routes: Routes = [
  {
    path: 'menus',
    component: MenusPage,
    children: [
      {
        path: 'complement',
        loadChildren: () => import('../complements/complements.module').then(m => m.ComplementsPageModule)
      },
      {
        path: 'burger',
        loadChildren: () => import('../burgers/burgers.module').then(m => m.BurgersPageModule)
      },
      {
        path: '',
        redirectTo: '/menus/burger',
        pathMatch: 'full' 
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusPageRoutingModule {}
