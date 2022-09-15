import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private httpService: HttpClient, ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  testApi() {
    this.httpService.post(`/store`, {data: {model : '123456789'}}).subscribe();
  }
}
