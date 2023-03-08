import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor (
  
  ) {}

  login(loginForm: FormGroup){

    console.log('Holi desde el servicio');
    
    let email = loginForm.value.email
    let password = loginForm.value.password

    console.log(email, password);
    
    let localUser = JSON.parse(localStorage.getItem('user')!);
    
    console.log(localUser);
    console.log(localUser.email);
    
 }
}
