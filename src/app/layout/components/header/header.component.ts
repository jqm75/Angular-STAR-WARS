import { Component } from '@angular/core';
import { AuthService } from 'src/app/content/auth/services/auth.service';
// import { Auth } from '../../core/interfaces/auth.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged: boolean

  constructor (
    private authService: AuthService 
  ) {
    this.isLogged = this.authService.isLogged()
  }
  
  get auth(){
    return this.authService.auth
  }
  
  logout() {
    this.authService.logout();
  }
}
