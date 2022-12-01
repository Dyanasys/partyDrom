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

  findUser(id_user: any) {
    return this.http.get<any>(this.url + '/api/user/' + id_user, this.httpOptions);
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

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(this.url + '/api/user/' + id, user, this.httpOptions);
  }
  makeAdmin(id: any): Observable<any> {
    return this.http.put<any>(this.url + '/api/make-user-admin/' + id, this.httpOptions);
  }
  makeNormal(id: any): Observable<any> {
    return this.http.put<any>(this.url + '/api/make-user-normal/' + id, this.httpOptions);
  }
  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/user/' + id, this.httpOptions);
  }

  //PROFILES
  listProfiles(id_user: any) {
    return this.http.get<any>(this.url + '/api/profiles/' + id_user, this.httpOptions);
  }

  findProfile(id_user: any) {
    return this.http.get<any>(this.url + '/api/profile/' + id_user, this.httpOptions);
  }

  deleteProfile(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/profile/' + id, this.httpOptions);
  }

  updateProfile(id: number, profile: any): Observable<any> {
    return this.http.put(this.url + '/api/profile/' + id, profile, this.httpOptions);
  }

  //locations
  listLocations() {
    return this.http.get<any>(this.url + '/api/locations/', this.httpOptions);
  }
  //request
  createRequest(myrequest: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/requests', myrequest, this.httpOptions);
  }

  cancelRequest(id_request: any): Observable<any> {
    return this.http.put(this.url + '/api/cancel-request/'+ id_request, this.httpOptions);
  }
  declineRequest(id_request: any): Observable<any> {
    return this.http.put(this.url + '/api/decline-request/'+ id_request, this.httpOptions);
  }
  acceptRequest(id_request: any): Observable<any> {
    return this.http.put(this.url + '/api/accept-request/'+ id_request, this.httpOptions);
  }

  getUserRequests(id_user: string) {
    return this.http.get(this.url + '/api/user-requests/'+ id_user, this.httpOptions);
  }

  getPartyRequests(id_party: string) {
    return this.http.get(this.url + '/api/party-requests/'+ id_party, this.httpOptions);
  }

  getPartyVacancies(id_party: string) {
    return this.http.get(this.url + '/api/get-vacancies/'+ id_party, this.httpOptions);
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
