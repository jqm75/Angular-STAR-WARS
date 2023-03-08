import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './content/home/home.component';
import { ContentComponent } from './content/content.component';
import { AuthComponent } from './content/auth/auth.component';
import { StarshipsComponent } from './content/starships/starships.component';

import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './content/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './content/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    ContentComponent,
    SharedComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
