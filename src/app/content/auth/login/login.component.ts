import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/content/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  public emailIsValid: boolean = true;
  public mailMessage: string = ''
  public passwordMessage: string = ''

  get isInLocalStorage() {
    return this.authService.isInLocalStorage
  }

  //public isInLocalStorage: boolean = true; 

  public loginForm : FormGroup = this.fb.group({
    email     : [ '', [ Validators.required, Validators.email ] ],
    password  : [ '', [ Validators.required, Validators.minLength(6) ] ],
  })

  constructor (
    private fb: FormBuilder,
    private authService: AuthService
  ) {}


  ngOnInit() {
    //this.emailIsValid = this.authService.checkEmail();
    //this.checkEmail();
    
    let email = this.authService.checkEmail();
    if (typeof email === "string" && email ) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
  }
  
  login() {
    const emailExist = this.authService.login(this.loginForm);
    this.authService.onLoginClick();
    this.mailMessage = ''
    this.passwordMessage = ''
    emailExist ? this.passwordMessage = 'La contraseña no es correcta' : this.mailMessage = 'El email no existe'
    
    /* if (this.emailIsValid ){
      this.isInLocalStorage = false
    } */
    
  }

  checkEmail() {
    let email = localStorage.getItem("user.email");
    if (email === null) {
      this.emailIsValid = false; // si no hay email en localStorage, la variable es false
    }
  }

}
