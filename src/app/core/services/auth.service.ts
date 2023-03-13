import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  public logged : boolean = false

  constructor (
    private router:Router
  ) {}

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

  logout() {
    localStorage.removeItem('_auth')
    this._auth = undefined
    this.router.navigate([''])
  }
}

