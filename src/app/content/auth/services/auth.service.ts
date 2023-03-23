import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth } from '../../../core/interfaces/auth.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  public logged : boolean = false

  public userIsLogged = new Subject<boolean>()

  constructor (
    private router:Router
  ) {
    this.userIsLogged.next(false)
  }

  login(loginForm: FormGroup){
    
    let email    = loginForm.value.email
    let password = loginForm.value.password
    let user     = loginForm.value.firstname

    let localUser = JSON.parse(localStorage.getItem('user')!);
    
    this._auth = {
      email : email,
      user  : user
    }
    
    if(localUser.email === email && localUser.password === password){
      localStorage.setItem( 'logged','true' )
      this.userIsLogged.next(true)
      this.router.navigate([''])
    }
  }

  get auth() {
    return this._auth;
  }
  
  isLogged() {
    if (localStorage.getItem('logged')) {
      return true
    } return false
  }
  onLoginClick(){
    this.router.navigate(['/starships']);
  }

  logout() {
    localStorage.removeItem('logged')
    this.userIsLogged.next(false)
    this._auth = undefined
    this.router.navigate([''])
  }

  checkEmail() {
    
    let email = localStorage.getItem("email");
    
    if (email === null) {
      
      alert("El correo electrónico no existe en el localStorage");
      return null;
    } else {
      
      return email;
    }
  }

}

