import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

import { HomePageRoutingModule } from './home-routing.module';
import { LandingPageModule } from '../landing/landing.module';
import { LandingPage } from '../landing/landing.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicHeaderParallaxModule,
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
