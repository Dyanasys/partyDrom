import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  session : any;

  ngOnInit(): void {
    this.session = sessionStorage;
  }

  logout() {
    sessionStorage.removeItem('id_user');
    sessionStorage.removeItem('is_admin');
    sessionStorage.removeItem('user_name');
  }

}
