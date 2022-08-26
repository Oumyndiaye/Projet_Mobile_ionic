import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{ HttpClientModule } from '@angular/common/http'
import { LandingPageModule } from './landing/landing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProvider } from './services/interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicHeaderParallaxModule,FormsModule,
    ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
