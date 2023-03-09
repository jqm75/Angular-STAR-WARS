import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Auth } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  
  constructor (
    
  ) {}

  login(loginForm: FormGroup){
    
    let email    = loginForm.value.email
    let password = loginForm.value.password
    let user     = loginForm.value.firstname

    this._auth = {
      email : email,
      user  : user
    }
    
    let localUser = JSON.parse(localStorage.getItem('user')!);
    
    if(localUser.email === email && localUser.password === password){
      alert('Logeado nen')
    }

  }
}


