import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public loginForm : any;

  constructor() { }

  login(){

    let email = this.loginForm.value.email
    let password = this.loginForm.value.password

    console.log(email, password);
    
    let localUser = JSON.parse(localStorage.getItem('user')!);
    
    console.log(localUser);
    console.log(localUser.email);
    
 }
}
