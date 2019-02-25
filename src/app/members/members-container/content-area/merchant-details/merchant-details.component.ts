import { MerchantService } from './../../../../shared/services/merchant.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.css']
})
export class MerchantDetailsComponent implements OnInit {

  $merchantDetails: Observable<Object>;
  details: any;

  constructor(private activatedRoute: ActivatedRoute, private merchantService: MerchantService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const merchantId = params['id'];
      console.log('merchant id is ', merchantId);
      console.log('active route is', this.activatedRoute);
      console.log('params are ', params);
      this.$merchantDetails = this.merchantService.getMerchantById(merchantId);
      this.$merchantDetails.subscribe(res => {
        console.log(res);
        this.details = res;
      }, err => {
        console.log(err);
      });
    });


}
  }


