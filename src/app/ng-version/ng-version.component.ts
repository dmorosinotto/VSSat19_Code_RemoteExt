import { Component, Input, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-ng-version',
  template: `
    <marquee #m>
      ng-version <u>{{ngver}}</u> works!
    </marquee>`,
  styleUrls: ['./ng-version.component.css']
})
export class NgVersionComponent implements OnInit {
  ngver: string;
  constructor(private renderer: Renderer) { 
    this.ngver = require("@angular/core/package.json").version;
  }
  
  @ViewChild('m') marquee: ElementRef;
  ngOnInit(): void {
    this.renderer.setElementAttribute(this.marquee.nativeElement, "scrollamount", "10");
  }
}
