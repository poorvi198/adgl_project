import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerDataService} from './customer-data.service';
import {downloadFile} from './utils';

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(private httpClient: HttpClient, private customerService: CustomerDataService) { }

  getCertificate(licenceNo: string): void {
   const customer = this.customerService.customerData.find((cust) => cust.licenceId === licenceNo);
   downloadFile(`api/uploads/${customer.fileName}`, customer.fileName);
  }

}
