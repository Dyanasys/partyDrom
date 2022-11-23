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

    this.commonService.login(this.user as any).subscribe(res => {
      let user_id= res[0].id;
      sessionStorage.setItem('id_user', user_id);
      this.router.navigateByUrl('/').then(r => console.log(res))
    },error => this.router.navigateByUrl('/').then(r =>{
      alert("Los datos introducidos no son válidos, prueba otra vez.");
      console.log(error);
    } ));


    // this.router.navigateByUrl('/').then(r => {
    //   console.log('user logged :)')
    // });
  }

  logout(){
    sessionStorage.removeItem('id_user');
  }

}
