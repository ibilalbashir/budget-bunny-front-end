

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    url = environment.url;

    constructor(private http: HttpClient) {

    }

    getAllCategories(): Observable<Object> {
      return this.http.get(`${this.url}/merchantCategories`);
    }



}
