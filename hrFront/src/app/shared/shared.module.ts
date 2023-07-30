import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { InputComponent } from './input/input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    NgxDatatableComponent,
    NgSelectComponent,
    InputComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  exports:[
    NgxDatatableComponent
  ]
})
export class SharedModule { }
