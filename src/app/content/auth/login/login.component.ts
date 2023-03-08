import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user.interface';

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
    private fb: FormBuilder
  ) {}
  

}
