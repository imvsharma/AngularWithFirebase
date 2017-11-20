import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

ElementRef
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('header') header: ElementRef;
  headerHeight:number;
  myStyle : object;
  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    this.headerHeight = this.header.nativeElement.offsetHeight + 30;
    this.myStyle = {
      height: 'calc(100vh - ' + this.headerHeight + 'px)'
    }
  }

}
