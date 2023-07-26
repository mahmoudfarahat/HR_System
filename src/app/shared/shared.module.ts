import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    NgxDatatableComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,

  ]
})
export class SharedModule { }
