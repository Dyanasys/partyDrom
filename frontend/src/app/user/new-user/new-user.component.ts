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
      if(sessionStorage['is_admin']){
        this.router.navigateByUrl('/admin-users').then(r => {
          console.log('user added :)')
        });
      }else{
        sessionStorage.setItem('id_user', user.id);
        sessionStorage.setItem('is_admin', user.is_admin);
        sessionStorage.setItem('user_name', user.name);
        this.session = sessionStorage;
        this.router.navigateByUrl('/edit-profile/' + user.id).then(r => {
          console.log('user added :)')
        });
      }
      this.user = user;
    }, error => {
      alert("datos incorrectos :(");
      console.log(error);
    });
  }

}
