import { Observable } from 'rxjs';
import { MerchantService } from './../../../../shared/services/merchant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {

  $allMerchants: Observable<Object>;

  constructor (private merchantService: MerchantService) { }

  ngOnInit() {
    this.$allMerchants  = this.merchantService.getAllMerchants();
    this.$allMerchants.subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
