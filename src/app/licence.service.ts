import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(private httpClient: HttpClient) { }

  // getCertificate(licenceNo: string): Observable<any>{
  //   return this.httpClient.get(`/api/getCertificate.php`);
  // }
  getCertificate(licenceNo: string): void {
    console.log(licenceNo);
  }
}
