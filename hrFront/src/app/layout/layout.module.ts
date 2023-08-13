import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavSubComponent } from './side-nav-sub/side-nav-sub.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';



@NgModule({
  declarations: [
    SideNavComponent,
    SideNavSubComponent,
    LayoutDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FontAwesomeModule

  ],exports:[
    SideNavComponent,
    SideNavSubComponent,
    LayoutDefaultComponent
  ]
})
export class LayoutModule { }
