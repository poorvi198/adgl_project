import { Component, OnInit } from '@angular/core';
import {Customer} from '../../utils';
import {CustomerDataService} from '../../customer-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditFormComponent} from '../edit-form/edit-form.component';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor(private customerService: CustomerDataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.customers = this.customerService.customerData;
    this.addForm = new FormGroup({
      name : new FormControl(''),
      licenceId : new FormControl(''),
      certificate: new FormControl(null)
    });
  }

  onDataEdit(i: number): void {
    const modalRef = this.modalService.open(EditFormComponent);
    (modalRef.componentInstance as EditFormComponent).editCustomerData = this.customers[i];
    (modalRef.componentInstance as EditFormComponent).index = i;
  }

  onDataDelete(i: number): void {
   this.customerService.deleteCustomer(i);
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
    uploadData.append('date_added', new Date().toString());
    uploadData.append('date_modified', new Date().toString());

    this.customerService.addCustomer(uploadData).subscribe((data) => {
      if (data.result === 'success') {
        this.addForm.reset();
        this.showToaster = true;
        setTimeout(() => {
          this.showToaster = false;
        }, 3000);
      }
    });
  }
}
