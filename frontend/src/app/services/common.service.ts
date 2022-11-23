import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  url: string = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  //USER
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/user', user, this.httpOptions);
  }
  login(user: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/login', user, this.httpOptions);
  }

  // list() {
  //   return this.http.get<any>(this.url + '/api/articles');
  // }
  //
  // add(article: any): Observable<any> {
  //   return this.http.post<any>(this.url + '/api/articles', article, this.httpOptions);
  // }
  //
  // find(id: number): Observable<any> {
  //   return this.http.get(this.url + '/api/article/' + id);
  // }
  //
  // update(id: number, article: any): Observable<any> {
  //   return this.http.put(this.url + '/api/article/' + id, article, this.httpOptions);
  // }
  //
  // delete(id: any): Observable<any> {
  //   return this.http.delete<any>(this.url + '/api/article/' + id, this.httpOptions);
  // }
}
