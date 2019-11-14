import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  getLink$(): Observable<{url: string, name:string}[]> {
    return this.http.get("/assets/links.json")
               .pipe(tap(console.log), map(res => res.json()))
  }
}
