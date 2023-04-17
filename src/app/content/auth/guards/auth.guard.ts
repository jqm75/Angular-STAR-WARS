import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(

    route: ActivatedRouteSnapshot

  ): Observable<boolean> | boolean {

    const pathRoute = route.url[0].path

    const isLogged = this.authService.isLogged();

    if (pathRoute === 'starships' && !isLogged)  {
      this.router.navigate(['/login']);
      return false;
    }
    if ((pathRoute === 'login'|| pathRoute === 'register') && isLogged)  {
      this.router.navigate(['/starships']);
      return false;
    }

    return true
  }



}
