import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsComponent } from './starships.component';
import { InfoComponent } from './info/info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StarshipsComponent, InfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    StarshipsComponent,
    InfoComponent
  ]
})
export class StarshipsModule { }
