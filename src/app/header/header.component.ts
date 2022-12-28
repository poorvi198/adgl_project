import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @ViewChild('hamburger') hamburger : ElementRef;
  @ViewChild('navmenu') navmenu : ElementRef;


  ngOnInit(): void {
  }

  toggleMenu(event: Event): void {
    this.hamburger.nativeElement.classList.toggle('active');
    this.navmenu.nativeElement.classList.toggle('active');
  }

  onNavMenuClick(event:Event): void {
    this.hamburger.nativeElement.classList.remove("active");
    this.navmenu.nativeElement.classList.remove("active");
  }
}
