import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterContainerComponent } from './footer-container/footer-container.component';

@NgModule({
  declarations: [FooterContainerComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ], exports: [
    FooterContainerComponent
  ]
})
export class FooterModule { }
