import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Customer } from './customer-type';
import { Storage } from '@shared/localStroage';


@Injectable()
export class CustomerService {
  url = 'http://localhost:3000/Customers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]> {
    return Storage.getAll();
  }

  getItemById(id: number): Observable<Customer> {
    return Storage.getItemById(id);
  }

  create(customer: Customer): Observable<{}> {
    return Storage.create(customer);
  }

  deleteItem(id: number): Observable<{}> {
    return Storage.deleteItem(id);
  }

  update(customer: Customer): Observable<Customer> {
    return Storage.updateItem(customer);
  }
}
