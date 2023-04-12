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
  
  public registerForm : FormGroup = this.fb.group({
    email     : [ '', [ Validators.required, Validators.email ] ],
    firstname : [ '', [ Validators.required, Validators.minLength(3) ] ],
    surname   : [ '', [ Validators.required, Validators.minLength(3) ] ],
    password  : [ '', [ Validators.required, Validators.minLength(6) ] ],
  })
  
  constructor (
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  saveRegisterForm (){
    this.user = {
      email     : this.registerForm.value.email,
      firstname : this.registerForm.value.firstname,
      surname   : this.registerForm.value.surname,
      password  : this.registerForm.value.password
    }
    this.http.post(this.url, this.user).subscribe()
    this.http.get(this.url).subscribe( users => console.log(users) )
    
    this.authService.loginFromSignIn()
  }

}

