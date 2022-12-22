import { Component, OnInit } from '@angular/core';
import {Customer} from '../../utils';
import {CustomerDataService} from '../../customer-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditFormComponent} from '../edit-form/edit-form.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  active = 'top';
  customers: Customer[];
  addForm: FormGroup;
  showToaster = false;
  certImg: string;

  constructor(private customerService: CustomerDataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCustomers();
    this.addForm = new FormGroup({
      name : new FormControl(''),
      licenceId : new FormControl(''),
      cPrice : new FormControl(0.0),
      tPrice : new FormControl(0.0),
      certificate: new FormControl(null)
    });
  }

  onDataEdit(i: number): void {
    const modalRef = this.modalService.open(EditFormComponent);
    (modalRef.componentInstance as EditFormComponent).editCustomerData = this.customers[i];
  }

  onDataDelete(i: number): void {
   this.customerService.deleteCustomer(i).subscribe(data => {
     this.customers.splice(i, 1);
   });
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customerData => {
      this.customers = customerData;
      this.customerService.customerData = customerData;
    });
  }

  addCustomer(): void {
    const uploadData = new FormData(); // Create Form Data object to upload the file in POST FORM
    const formValue = this.addForm.value;
    for (const i in formValue) {
      if (formValue[i] instanceof Blob){  //  Check if key value is file
        uploadData.append('certificate', formValue[i], formValue[i].name ? formValue[i].name : '');
      }
      else {
        uploadData.append(i, formValue[i]);
      }
    }
    this.customerService.addCustomer(uploadData).subscribe((data) => {
      if (data.result === 'success') {
        this.addForm.reset();
        this.showToaster = true;
        setTimeout(() => {
          this.showToaster = false;
        }, 3000);
        this.getCustomers();
      }
    });
  }

  onFileSelect($event: Event): void {
    const file = ($event.target as HTMLInputElement).files[0];
    this.addForm.patchValue({certificate: file});
    this.addForm.get('certificate').updateValueAndValidity();
  }
}
