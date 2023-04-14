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
    private authService: AuthService,
    ) {}
    
    
  ngOnInit() {
      
      let email = this.authService.checkEmail();
      if (typeof email === "string" && email ) {
        this.emailIsValid = true;
      } else {
        this.emailIsValid = false;
      }
    }
    

    login() {
      let email = this.loginForm.get('email')?.value;
      let password = this.loginForm.get('password')?.value;
      this.authService.login(email, password).subscribe(emailExist => {
        this.mailMessage = '';
        this.passwordMessage = '';
        emailExist ? this.passwordMessage = 'The wrong password is' : this.mailMessage = 'In an even further galaxy this email is'; 
      })
    }
    

  checkEmail() {
    let email = localStorage.getItem("user.email");
    if (email === null) {
      this.emailIsValid = false; // si no hay email en localStorage, la variable es false
    }
  }

}
