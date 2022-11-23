import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user:any;

  constructor(private commonService:CommonService,private router: Router) { }

  ngOnInit(): void {
  }
  add(name: string, email: string, password: string) {
    this.user = {
      'name': name,
      'email': email,
      'password': password
    }

    this.commonService.addUser(this.user as any).subscribe(user => {
      this.user = user
    });

    this.router.navigateByUrl('/').then(r => {
      console.log('user added :)')
    });
  }

}
