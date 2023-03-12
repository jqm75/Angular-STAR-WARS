import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Auth } from '../../core/interfaces/auth.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (
    private authService: AuthService 
  ) {}
  
  get auth(){
    return this.authService.auth
  }
  
  logout() {
    this.authService.logout();
  }
}
