import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {  CustomerType } from './customer-type';


@Injectable()
export class CustomerService {
  url = 'http://localhost:3000/Customers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.url);
  }

  //   create(addressType: AddressType): Observable<AddressType> {
  //     return this.http.post<AddressType>(this.url, addressType);
  //   }

  //   delete(id: number): Observable<AddressType> {
  //     return this.http.delete<AddressType>(this.url + '/' + id);
  //   }

  //   update(addressType: AddressType): Observable<AddressType> {
  //     return this.http.put<AddressType>(this.url + '/' + addressType.addressTypeId , addressType);
  //   }
}
