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
    this.httpClient.get(`/api/getFileName.php?licence_id=${licenceNo}`).subscribe((file:{file_name:string}) => {
      downloadFile(`api/uploads/${file.file_name}`, file.file_name);
    });
   
  }
}
