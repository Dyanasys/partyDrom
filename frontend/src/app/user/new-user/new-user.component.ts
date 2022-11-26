import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user: any;
  session: any;

  constructor(private commonService: CommonService, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
  }

  add(name: string, email: string, password: string) {
    this.user = {
      'name': name,
      'email': email,
      'password': password
    }

    this.commonService.addUser(this.user as any).subscribe(user => {
      this.user = user;
      let id_user= user.id;
      let user_name= user.name;
      let is_admin= user.is_admin;
      sessionStorage.setItem('id_user', id_user);
      sessionStorage.setItem('is_admin', is_admin);
      sessionStorage.setItem('user_name', user_name);
      this.session = sessionStorage;
      if (user.is_admin == 1) {
        this.router.navigateByUrl('/').then(r => {
          console.log('user added :)')
        });
      } else {
        this.router.navigateByUrl('/edit-profile/' + user.id_user).then(r => {
          console.log('user added :)')
        });
      }
    }, error => {
      alert("datos incorrectos :(");
      console.log(error);
    });
  }

}
