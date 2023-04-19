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

export class RegisterComponent implements OnInit {

  public user! : User
  public url: string = 'http://localhost:3000/user'
  public submitted: boolean = false;
  public emailExist: boolean = false;
  public emailMessage: string = '';
  public passwordMessage: string = '';
  public passwordError: string = '';

  public registerForm : FormGroup = this.fb.group({
    email     : [ 'quim@mail.com', [ Validators.required, Validators.email ] ],
    firstname : [ 'Joaquim', [ Validators.required, Validators.minLength(2) ] ],
    surname   : [ 'Pujol', [ Validators.required, Validators.minLength(2) ] ],
    password  : [ '123123', [ Validators.required, Validators.minLength(6) ] ],
  })
  
  constructor (
    private fb: FormBuilder,
    public authService: AuthService
  ) {}

  onSubmit() {
    this.submitted = true;
    this.authService.onSubmit(this.registerForm).subscribe(userArray => {

      console.log(userArray)

      this.emailMessage = '';
      this.passwordMessage = '';
      this.emailExist = false;
      
      if (userArray) {
        
        this.emailMessage = 'Already in use, email is';
        this.emailExist = true;
      } 
      
    })
  }

  resetMailValidation(){
    this.emailMessage = '';
    this.emailExist = false;
  }
  
  

  /* onSubmit() {
    this.submitted = true;
    this.authService.onSubmit(this.registerForm).subscribe(emailExist => {
      this.emailMessage = '';
      this.passwordMessage = '';
      emailExist ? this.passwordMessage = 'The wrong password is' : this.emailMessage = 'Already in use, email is.'//'In an even further galaxy this email is'; 
    })
  } */

  ngOnInit(): void {
    this.authService.userIsLogged.subscribe(() => {
      this.authService.errorMessage = '';
    });
  }

}

