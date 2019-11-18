import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'legacy-ng6 on Docker: slim + volume';
  links = []
  constructor(api: ApiService){
    api.getLink$().subscribe(data => this.links = data);
  }
}
