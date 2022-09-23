import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../utils';
import {CustomerDataService} from '../../customer-data.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editForm: FormGroup;
  @Input() editCustomerData: Customer;
  @Input() index: number;

  constructor(private customerService: CustomerDataService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name : new FormControl(this.editCustomerData.name),
      licenceId : new FormControl(this.editCustomerData.licenceId),
      fileName : new FormControl(this.editCustomerData.fileName)
    });
  }

  editCustomer(): void {
    this.customerService.editCustomer(this.index, this.editForm.value);
  }
}
