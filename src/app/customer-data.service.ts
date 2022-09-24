import { Injectable } from '@angular/core';
import {Customer} from './utils';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customerData: Customer[] = [{
    name: 'customer 1',
    licenceId: '12345',
    date: new Date(),
    fileName: 'filename 1'
  },
  {
    name: 'customer 12',
    licenceId: '1234533',
    date: new Date(),
    fileName: 'filename 12'
  },
  {
    name: 'customer 13',
    licenceId: '1234544',
    date: new Date(),
    fileName: 'filename 13'
  },
  {
    name: 'customer 14',
    licenceId: '1234522',
    date: new Date(),
    fileName: 'filename 14'
  }];

  constructor(private httpClient: HttpClient) { }

  editCustomer(index, customerData: Customer): void {
    this.customerData[index] = {...this.customerData[index], ...customerData};
  }

  deleteCustomer(i: number): void {
    this.customerData.splice(i,1);
  }

  addCustomer(customerData: FormData): Observable<{result: string}> {
    return this.httpClient.post<{result: string}>(`/api/create.php`, customerData);
  }
}
