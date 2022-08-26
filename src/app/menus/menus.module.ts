import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusPageRoutingModule } from './menus-routing.module';

import { MenusPage } from './menus.page';
import { ComplementsPageModule } from '../complements/complements.module';
import { BurgersPageModule } from '../burgers/burgers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusPageRoutingModule,
    ComplementsPageModule,
    BurgersPageModule
  ],
  declarations: [MenusPage]
})
export class MenusPageModule {}
