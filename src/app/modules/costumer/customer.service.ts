import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Customer } from './customer-type';


@Injectable()
export class CustomerService {
  url = 'http://localhost:3000/Customers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  getItemById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + id);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  deleteItem(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.url + '/' + id);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url + '/' + customer.id, customer);
  }
}
