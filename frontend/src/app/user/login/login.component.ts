import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:any;
  constructor(private commonService:CommonService,private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.user = {
      'email': email,
      'password': password
    }

    this.commonService.login(this.user as any).subscribe(user => {
      this.user = user
    });

    this.router.navigateByUrl('/').then(r => {
      console.log('user logged :)')
    });
  }

}
