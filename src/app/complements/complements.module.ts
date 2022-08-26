import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplementsPageRoutingModule } from './complements-routing.module';

import { ComplementsPage } from './complements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplementsPageRoutingModule
  ],
  declarations: [ComplementsPage]
})
export class ComplementsPageModule {}
