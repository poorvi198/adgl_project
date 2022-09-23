import { Component, OnInit } from '@angular/core';
import {Customer} from '../../utils';
import {CustomerDataService} from '../../customer-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditFormComponent} from '../edit-form/edit-form.component';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  active = 'top';
  customers: Customer[];

  constructor(private customerService: CustomerDataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.customers = this.customerService.customerData;
  }

  onDataEdit(i: number): void {
    const modalRef = this.modalService.open(EditFormComponent);
    (modalRef.componentInstance as EditFormComponent).editCustomerData = this.customers[i];
    (modalRef.componentInstance as EditFormComponent).index = i;
  }
}
