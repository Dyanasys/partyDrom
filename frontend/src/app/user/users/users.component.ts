import { Component, OnInit } from '@angular/core';
import {PartyService} from "../../services/party.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any; //esta variable se pasa al html
  session: any;
  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    this.users = this.commonService.listAdminUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  delete(id: any) {
    this.commonService.deleteUser(id).subscribe(user => {
      this.router.navigateByUrl('/admin-users').then(r => console.log(r) );
    });
  }

  makeAdmin(id: any) {
    this.commonService.makeAdmin(id).subscribe(user => {
      this.router.navigateByUrl('/admin-users').then(r => console.log(r) );
    });
  }

  makeNormal(id: any) {
    this.commonService.makeNormal(id).subscribe(user => {
      this.router.navigateByUrl('/admin-users').then(r => console.log(r) );
    });
  }


}
