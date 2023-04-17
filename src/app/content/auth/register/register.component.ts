import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss']
})

export class RegisterComponent {

  public user! : User
  public url: string = 'http://localhost:3000/user'
  public submitted: boolean = false

  public registerForm : FormGroup = this.fb.group({
    email     : [ '', [ Validators.required, Validators.email ] ],
    firstname : [ '', [ Validators.required, Validators.minLength(2) ] ],
    surname   : [ '', [ Validators.required, Validators.minLength(2) ] ],
    password  : [ '', [ Validators.required, Validators.minLength(6) ] ],
  })
  
  constructor (
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.submitted = true;
    this.authService.onSubmit(this.registerForm)

  }

}

