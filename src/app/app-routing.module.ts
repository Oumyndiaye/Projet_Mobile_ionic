import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Role } from './models/role';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menus',canActivate: [AuthGuard],
    loadChildren: () => import('./menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'burgers',
    loadChildren: () => import('./burgers/burgers.module').then( m => m.BurgersPageModule)
  },
  {
    path: 'complements',
    loadChildren: () => import('./complements/complements.module').then( m => m.ComplementsPageModule)
  },
  {
    path: 'livraisons',canActivate: [AuthGuard], 
    loadChildren: () => import('./livraisons/livraisons.module').then( m => m.LivraisonsPageModule)
  },
  {
    path: 'detail-livraison',
    loadChildren: () => import('./detail-livraison/detail-livraison.module').then( m => m.DetailLivraisonPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
