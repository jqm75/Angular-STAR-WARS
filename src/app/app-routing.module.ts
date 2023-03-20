import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { LoginComponent } from './content/auth/login/login.component';
import { StarshipsComponent } from './content/starships/starships.component';
import { InfoComponent } from './content/starships/info/info.component';
import { AuthGuard } from './content/auth/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'starships', component: StarshipsComponent, canActivate: [AuthGuard] },
  { path: 'starships/:id', component: InfoComponent,  canActivate: [AuthGuard] },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: '' },
  
  { path: ':id', component: InfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
