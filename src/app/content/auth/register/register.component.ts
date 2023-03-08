import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss']
})

export class RegisterComponent {

  public user! : User

  public registerForm : FormGroup = this.fb.group({
    email     : [ '', [ Validators.required, Validators.email ] ],
    firstname : [ '', [ Validators.required, Validators.minLength(3) ] ],
    surname   : [ '', [ Validators.required, Validators.minLength(3) ] ],
    password  : [ '', [ Validators.required, Validators.minLength(6) ] ],
  })

  constructor (
    private fb: FormBuilder
  ) {}

  saveRegisterForm (){
    this.user = {
      email     : this.registerForm.value.email,
      firstname : this.registerForm.value.firstname,
      surname   : this.registerForm.value.surname,
      password  : this.registerForm.value.password
    }
    
    localStorage.setItem('user', JSON.stringify(this.user))
  }

}
