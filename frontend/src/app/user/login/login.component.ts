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
session:any;
  constructor(private commonService:CommonService,private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.user = {
      'email': email,
      'password': password
    }

    this.commonService.login(this.user as any).subscribe(user => {
      if(user!='0'){
        let id_user= user[0].id;
        let user_name= user[0].name;
        let is_admin= user[0].is_admin;
        sessionStorage.setItem('id_user', id_user);
        sessionStorage.setItem('is_admin', is_admin);
        sessionStorage.setItem('user_name', user_name);
        this.session = sessionStorage;
        this.router.navigateByUrl('/').then(r => console.log(user))
      }else{
        alert("Los datos introducidos no son correctos, prueba otra vez.");
        this.router.navigateByUrl('/login').then(r => console.log(r) );
      }

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
    sessionStorage.removeItem('is_admin');
    sessionStorage.removeItem('user_name');
  }

}
