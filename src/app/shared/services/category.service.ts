

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    url = environment.url;
    access_token = localStorage.getItem('token');


    constructor(private http: HttpClient) {

    }

    getAllCategories(): Observable<Object> {
      return this.http.get(`${this.url}/merchantCategories`);
    }
    getMerchantByCategoryId(id): Observable<Object> {
      return this.http.get(`${this.url}/merchants?filter[where][categoryId][like]=${id}&access_token=${this.access_token}`);
    }



}
