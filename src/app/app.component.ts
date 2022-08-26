import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService:AuthService) {}
  logout()
  {
    return  this.authService.logout()
  }
  getRole()
  {
     return this.authService.getDecodedAccessToken(this.authService.getAccessToken()).roles[0]
  }
}
