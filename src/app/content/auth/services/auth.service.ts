import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Auth } from '../../../core/interfaces/auth.interface';
import { Subject } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth          : Auth | undefined
  public logged          : boolean = false
  public isInLocalStorage: boolean = false
  public url: string = 'http://localhost:3000/user'

  public userIsLogged = new Subject<boolean>()
  public usersData: User[] = []

  constructor (
    private router:Router, 
    private http: HttpClient,

  ) {
    this.userIsLogged.next(false)
    this.http.get<User[]>(this.url).subscribe(users => this.usersData = users)
  }

  login(loginForm: FormGroup){
    
    let email     = loginForm.value.email
    let password  = loginForm.value.password
  
    let emailExist: boolean = false

    this.usersData.forEach(user => {

      
      if(user.email === email ){
        if(user.password === password){
          console.log('User Mail & Password is OK. The user is Logged right now.')
          localStorage.setItem( 'logged','true' )
          this.userIsLogged.next(true)
          this.router.navigate([''])
        }
        emailExist = true
      }
      
    })
    return emailExist
  }

  get auth() {
    return this._auth;
  }
  
  isLogged() {
    if (localStorage.getItem('logged')) {
      console.log('The user is Logged')
      return true
    } 
      console.log('The user is not Logged');
      return false
  }
  onLoginClick(){
    this.router.navigate(['/starships']);
  }

  logout() {
    localStorage.removeItem('logged')
    this.userIsLogged.next(false)
    this._auth = undefined
    console.log('The user is unlogged')
    this.router.navigate([''])
  }

  checkEmail() {
  let email = localStorage.getItem("user.email");
  if (email === null) {
    this.isInLocalStorage = false
    return false;
  } return true
}

}

