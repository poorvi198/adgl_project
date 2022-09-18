import {Component, TemplateRef, ViewChild} from '@angular/core';
import {LicenceService} from '../licence.service';
import {FormGroup, NgForm} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  licenceId = '';
  @ViewChild('licenceModal') modal: HTMLElement;

  constructor(private licenceService: LicenceService, private modalService : NgbModal) { }

  getCertificate(form: NgForm): void {
    this.licenceService.getCertificate(form.value.licenceId);
    form.reset();
  }

  openLicenceModal(licenceModal: TemplateRef<any>): void{
    this.modalService.open(licenceModal);
  }
}
