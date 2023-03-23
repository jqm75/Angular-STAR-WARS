import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/content/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  public loginForm : FormGroup = this.fb.group({
    email     : [ '', [ Validators.required, Validators.email ] ],
    password  : [ '', [ Validators.required, Validators.minLength(6) ] ],
  })

  constructor (
    private fb: FormBuilder,
    private authService: AuthService
  ) {}


  ngOnInit() {
    
    let email = this.authService.checkEmail();
    if (email) {
      console.log("El correo electrónico es " + email);
    }
  }


  login() {
    this.authService.login(this.loginForm);
    this.authService.onLoginClick();
  }

}
