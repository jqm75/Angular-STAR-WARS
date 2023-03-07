import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { ContentComponent } from './content/content.component';
import { AuthComponent } from './content/auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StarshipsComponent } from './content/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    ContentComponent,
    SharedComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
