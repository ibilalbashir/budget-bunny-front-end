import { MerchantsComponent } from './members-container/content-area/merchants/merchants.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MembersContainerComponent } from './members-container/members-container.component';
import { SidebarComponent } from './members-container/sidebar/sidebar.component';
import { ContentAreaComponent } from './members-container/content-area/content-area.component';
import { CategoriesComponent } from './members-container/content-area/categories/categories.component';
import {MatCardModule} from '@angular/material/card';
import { MerchantDetailsComponent } from './members-container/content-area/merchant-details/merchant-details.component';

@NgModule({
  declarations: [MembersContainerComponent, SidebarComponent,
    ContentAreaComponent, CategoriesComponent, MerchantsComponent, MerchantDetailsComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class MembersModule { }
