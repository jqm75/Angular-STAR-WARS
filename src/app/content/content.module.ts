import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { StarshipsModule } from './starships/starships.module';



@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    HomeModule,
    StarshipsModule
  ]
})
export class ContentModule { }
