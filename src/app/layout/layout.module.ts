import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './components/header/menu/menu.component';
import { ContentModule } from '../content/content.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ContentModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
