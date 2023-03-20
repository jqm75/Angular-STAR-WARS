import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './content/home/home.component';
import { ContentComponent } from './content/content.component';
import { AuthComponent } from './content/auth/auth.component';
import { StarshipsComponent } from './content/starships/starships.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { LoginComponent } from './content/auth/login/login.component';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './content/starships/info/info.component';
import { MenuComponent } from './layout/header/menu/menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    ContentComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    InfoComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
