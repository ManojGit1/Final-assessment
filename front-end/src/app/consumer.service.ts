import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private baseUrl =  'http://localhost:8764/Customer/'; 

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`); //${this.baseUrl}
  }
}
