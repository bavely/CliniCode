import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsbComponent } from './adminsb.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AdminsbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AdminsbComponent]
})
export class AdminsbModule { }
