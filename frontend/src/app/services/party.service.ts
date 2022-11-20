import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  url: string = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<any>(this.url + '/api/parties');
  }

  add(article: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/parties', article, this.httpOptions);
  }

  find(id: number): Observable<any> {
    return this.http.get(this.url + '/api/party/' + id);
  }

  update(id: number, article: any): Observable<any> {
    return this.http.put(this.url + '/api/party/' + id, article, this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/party/' + id, this.httpOptions);
  }
}
