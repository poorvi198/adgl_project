import {Injectable} from '@angular/core';
import {Customer, CustomerData} from './utils';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customerData: Customer[];

  constructor(private httpClient: HttpClient) { }

  editCustomer(formData: FormData): Observable<{result: string}> {
    return this.httpClient.post<{result: string}>(`/api/update.php`, formData);
  }

  deleteCustomer(i: number): Observable<any> {
    return this.httpClient.get(`/api/delete.php?id=${this.customerData[i].id}`);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<CustomerData[]>(`/api/get.php`).pipe(map((data: CustomerData[]) => {
      return data.map(customer => {
        const customerInfo: Customer = {
          id: customer.id,
          name: customer.cust_name,
          licenceId: customer.licence_id,
          fileName: customer.file_name,
          date: customer.date_modified,
          cPrice: customer.price_c,
          tPrice: customer.price_t
        };
        return customerInfo;
      });
    }));
  }

  addCustomer(customerData: FormData): Observable<{result: string}> {
    return this.httpClient.post<{result: string}>(`/api/create.php`, customerData);
  }
}
