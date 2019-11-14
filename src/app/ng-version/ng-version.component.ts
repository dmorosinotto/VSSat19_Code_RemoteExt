import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  constructor(private renderer: Renderer2) { 
    this.ngver = require("@angular/core/package.json").version;
  }
  
  @ViewChild('m', { static: true }) marquee: ElementRef;
  ngOnInit(): void {
    __ngRendererSetElementAttributeHelper(this.renderer, this.marquee.nativeElement, "scrollamount", "10");
  }
}

type AnyDuringRendererMigration = any;

function __ngRendererSplitNamespaceHelper(name: AnyDuringRendererMigration) {
    if (name[0] === ":") {
        const match = name.match(/^:([^:]+):(.+)$/);
        return [match[1], match[2]];
    }
    return ["", name];
}

function __ngRendererSetElementAttributeHelper(renderer: AnyDuringRendererMigration, element: AnyDuringRendererMigration, namespaceAndName: AnyDuringRendererMigration, value?: AnyDuringRendererMigration) {
    const [namespace, name] = __ngRendererSplitNamespaceHelper(namespaceAndName);
    if (value != null) {
        renderer.setAttribute(element, name, value, namespace);
    }
    else {
        renderer.removeAttribute(element, name, namespace);
    }
}
