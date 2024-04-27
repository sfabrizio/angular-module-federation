import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniTableComponent } from './mini-table.component';
import { RouterModule } from '@angular/router';
import { TABLE_ROUTES } from './mini-table.route';



@NgModule({
  declarations: [
    MiniTableComponent
  ],
  exports: [
    MiniTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TABLE_ROUTES)
  ]
})
export class MiniTableModule { }
