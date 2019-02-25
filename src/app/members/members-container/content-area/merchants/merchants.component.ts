import { CategoryService } from './../../../../shared/services/category.service';
import { Observable } from 'rxjs';
import { MerchantService } from './../../../../shared/services/merchant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {

  $allMerchants: Observable<Object>;
  $merchantById: Observable<Object>;

  constructor (private categoryService: CategoryService , private merchantService: MerchantService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log('params are', params); // log the entire params object
      console.log('params id is ', params['id']); // log the value of id
      this.$allMerchants = this.categoryService.getMerchantByCategoryId(params['id']);
    });

    this.$allMerchants  = this.merchantService.getAllMerchants();
    this.$allMerchants.subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getMerchantByIdFn() {

  }

}
