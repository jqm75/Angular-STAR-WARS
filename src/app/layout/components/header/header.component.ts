import { Component } from '@angular/core';
import { AuthService } from 'src/app/content/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isLogged: boolean = false

  constructor (
    private authService: AuthService 
  ) {
    this.isLogged = this.authService.isLogged()
    this.authService.userIsLogged.subscribe(userIsLogged => {
      this.isLogged = userIsLogged
    })
  }

  get auth(){
    return this.authService.auth
  }
  
  logout() {
    this.authService.logout();
  }
}
