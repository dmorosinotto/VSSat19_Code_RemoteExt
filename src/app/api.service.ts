import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLink$(): Observable<{url: string, name:string}[]> {
    return this.http.get<{url: string, name:string}[]>("/assets/links.json")
               //.pipe(tap(console.log), map(res => res.json()))
  }
}
