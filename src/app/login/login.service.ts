import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }

  login(adminData: FormData): Observable<{result: string}> {
    return this.httpclient.post<{result: string}>(`/api/login.php`, adminData);
  }
}
