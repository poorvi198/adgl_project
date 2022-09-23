import { Injectable } from '@angular/core';
import {Customer} from './utils';

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

  constructor() { }

  editCustomer(index, customerData: Customer): void {
    this.customerData[index] = {...this.customerData[index], ...customerData};
  }
}
