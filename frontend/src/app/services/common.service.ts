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
    return this.http.post<any>(this.url + '/api/login?XDEBUG_SESSION_START=1', user, this.httpOptions);
  }

  listUsers() {
    return this.http.get<any>(this.url + '/api/users');
  }
  listAdminUsers() {
    let id_user;
    if (sessionStorage['id_user']) {
      id_user = sessionStorage['id_user'];
    } else {
      id_user = 1;
    }
    return this.http.get<any>(this.url + '/api/admin-users/' + id_user, this.httpOptions);
  }
  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/user/' + id, this.httpOptions);
  }

  //PROFILES
  listProfiles() {
    let id_user;
    if (sessionStorage['id_user']) {
      id_user = sessionStorage['id_user'];
    } else {
      id_user = 1;
    }
    return this.http.get<any>(this.url + '/api/profiles/' + id_user, this.httpOptions);
  }

  listProfile(id_user:any = null) {
    if (id_user==null&&sessionStorage['id_user']) {
      id_user = sessionStorage['id_user'];
    } else if(id_user==null) {
      id_user = 1;
    }
    return this.http.get<any>(this.url + '/api/profile/' + id_user, this.httpOptions);
  }

  deleteProfile(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/profile/' + id, this.httpOptions);
  }

  updateProfile(id: number, profile: any): Observable<any> {
    return this.http.put(this.url + '/api/profile/' + id, profile, this.httpOptions);
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
