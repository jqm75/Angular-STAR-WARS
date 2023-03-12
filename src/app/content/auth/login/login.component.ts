import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm : FormGroup = this.fb.group({
    email     : [ '', [ Validators.required, Validators.email ] ],
    password  : [ '', [ Validators.required, Validators.minLength(6) ] ],
  })

  constructor (
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  login() {
    this.authService.login(this.loginForm);
  }

}
