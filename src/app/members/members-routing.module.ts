import { MerchantDetailsComponent } from './members-container/content-area/merchant-details/merchant-details.component';
import { CategoriesComponent } from './members-container/content-area/categories/categories.component';
import { MerchantsComponent } from './members-container/content-area/merchants/merchants.component';
import { MembersContainerComponent } from './members-container/members-container.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MembersContainerComponent,
    children: [
      {path: 'merchants', component: MerchantsComponent},

      {path: 'categories', component: CategoriesComponent},
      // {path: ':id', component: MerchantDetailsComponent}
      {path: ':id', component: MerchantsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
