import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getAllMerchants(): Observable<Object> {
    return this.http.get(`${this.url}/merchants`);
  }

  getMerchantById(id): Observable<Object> {
    return this.http.get(`${this.url}/merchants/${id}`);
  }

  getCouponCode(mId): Observable<Object> {
    return this.http.get(`${this.url}/merchants/${mId}/generate-coupon`);
  }
}
