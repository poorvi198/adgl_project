import {Component, OnInit} from '@angular/core';
import {CustomerDataService} from './customer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private customerService: CustomerDataService) {
  }

  ngOnInit(): void {
    // this.customerService.getCustomers().subscribe(customers => {
    //   this.customerService.customerData = customers;
    // });
  }
}
