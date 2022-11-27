import { Component, OnInit } from '@angular/core';
import {PartyService} from "../../services/party.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any; //esta variable se pasa al html
  session: any;
  id:any;
  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    const routeParams = this.route.snapshot.paramMap;
    if(routeParams.get('id')){
      this.id = Number(routeParams.get('id'));
    }else{
      this.id = sessionStorage['id_user'];
    }

    this.profile = this.commonService.findProfile(this.id).subscribe(profile => {
      this.profile = profile;
    });
  }

  delete(id: any) {
    this.commonService.deleteProfile(id).subscribe(profile => {
      this.show();
    });
  }

}
