import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../utils';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editForm: FormGroup;
  @Input() editCustomerData: Customer;

  constructor() { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name : new FormControl(this.editCustomerData.name),
      licenceId : new FormControl(this.editCustomerData.licenceId),
      fileName : new FormControl(this.editCustomerData.fileName)
    });
  }

}
