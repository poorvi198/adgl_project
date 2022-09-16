import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  licenceId = '';

  constructor(private httpService: HttpClient, ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  testApi() {
    const car = {model:'123'};
    this.httpService.post(`/api/store.php`, {data:car}).subscribe();
  }
}
