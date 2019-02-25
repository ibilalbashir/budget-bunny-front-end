

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.url;

    constructor(private http: HttpClient) {

    }

    singupFn(obj): Observable<object> {
      return this.http.post(`${this.url}/bunnyUsers`, obj);
    }



}
