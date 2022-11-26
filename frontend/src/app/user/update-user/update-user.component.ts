import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user: any; //esta variable se pasa al html
  session: any;
  id: any;
  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    this.user = this.commonService.findUser().subscribe(user => {
      this.user = user;
      this.id = user.id;
    });
  }

  update(){
    this.commonService.updateUser(this.id, this.user).subscribe((res) => {
      this.router.navigateByUrl('/admin-users').then(r => console.log(res));
    });
  }

  delete(id: any) {
    this.commonService.deleteUser(id).subscribe(user => {
      this.show();
    });
  }


}
