import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Auth } from '../../../core/interfaces/auth.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { Subject, catchError, map, of } from 'rxjs';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: string | undefined
  public logged: boolean = false
  public isInLocalStorage: boolean = false
  public url: string = 'http://localhost:3000/user'

  public userIsLogged = new Subject<boolean>()
  public usersData: User[] = []

  constructor(
    private router: Router,
    private http: HttpClient,

  ) {
    this.userIsLogged.next(false)
    this.http.get<User[]>(this.url).subscribe(users => this.usersData = users)
  }

  login(email: string, password: string) {
    return this.http.get<User[]>(`${this.url}?email=${email}`)
    .pipe(
      map(array => {
      
      const user = array[0]

      if (user){

        if (bcrypt.compareSync(password, user.password)) {
          
          localStorage.setItem('auth', JSON.stringify(user.email));
  
          this._auth = user.email;
          this.userIsLogged.next(true);
          this.router.navigate(['/starships'])
        }
        return user.email
      }

      return undefined;
    }),
    );
  }

  get auth() {
    return this._auth;
  }

  saveRegisterForm (form: FormGroup) {
    const user = {
      ...form.value,
      password: bcrypt.hashSync(form.value.password),
      id : Math.round(Math.random() * 1000)
    }

    console.log('🚀 ~ file: auth.service.ts:61 ~ AuthService ~ saveRegisterForm ~ user:', user)

    this.http.post(this.url, user).subscribe()

    this.login(user.email, user.password).subscribe()
  }  

  isLogged() {
    if (localStorage.getItem('auth')) {
      console.log('The user is Logged')
      return true
    }
    console.log('The user is not Logged');
    return false
  }
  onLoginClick() {
    this.router.navigate(['/starships']);
  }

  logout() {
    localStorage.removeItem('auth')
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


