import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../utils';
import {CustomerDataService} from '../../customer-data.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editForm: FormGroup;
  @Input() editCustomerData: Customer;
  showFile = true;

  constructor(private customerService: CustomerDataService, public activeModal: NgbActiveModal, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name : new FormControl(this.editCustomerData.name),
      licenceId : new FormControl(this.editCustomerData.licenceId),
      certificate : new FormControl(null),
      cPrice : new FormControl(this.editCustomerData.cPrice),
      tPrice : new FormControl(this.editCustomerData.tPrice)
    });
    this.httpClient.get(`api/uploads/${this.editCustomerData.fileName}`, {
      responseType: 'blob'
    }).subscribe(data => {
      const file = new File([data], this.editCustomerData.fileName);
      this.editForm.controls.certificate.patchValue(file);
    });
  }

  editCustomer(): void {
    const uploadData = new FormData(); // Create Form Data object to upload the file in POST FORM
    const formValue = this.editForm.value;
    for (const i in formValue) {
      if (formValue[i] instanceof Blob){  //  Check if key value is file
        uploadData.append('certificate', formValue[i], formValue[i].name ? formValue[i].name : '');
      }
      else {
        uploadData.append(i, formValue[i]);
      }
    }
    uploadData.append('id', this.editCustomerData.id.toString());
    this.customerService.editCustomer(uploadData).subscribe((data) => {
      // if (data.result === 'success') {
      //   this.addForm.reset();
      //   this.showToaster = true;
      //   setTimeout(() => {
      //     this.showToaster = false;
      //   }, 3000);
      //   this.getCustomers();
      // }
      this.customerService.getCustomers();
    });
    // this.customerService.editCustomer(this.editCustomerData.id, this.editForm.value);
  }

  onFileSelect($event: Event): void {
      const file = ($event.target as HTMLInputElement).files[0];
      this.editForm.patchValue({certificate: file});
      this.editForm.get('certificate').updateValueAndValidity();
    }
}
