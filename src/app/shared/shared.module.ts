import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsBgComponent } from './stars-bg/stars-bg.component';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    StarsBgComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarsBgComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
