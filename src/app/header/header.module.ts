import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { NavbarComponent } from './header-container/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NgbModule,
    MatMenuModule
  ],
  exports: [
    HeaderContainerComponent
  ],
  declarations: [HeaderContainerComponent, NavbarComponent]
})
export class HeaderModule { }
