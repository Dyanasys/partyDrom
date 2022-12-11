import { Component, OnInit } from '@angular/core';
import {PartyService} from "../../services/party.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests: any; //esta variable se pasa al html
  session: any;
  locations: any;
  myrequest: any;
  id: any;
  constructor( private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    let id_user;
    if (sessionStorage['id_user']) {
      id_user = sessionStorage['id_user'];
    } else {
      id_user = null;
    }
    const routeParams = this.route.snapshot.paramMap;
    if(routeParams.get('id')){
      this.id = Number(routeParams.get('id'));
      this.requests = this.commonService.getUserRequest(id_user,this.id).subscribe((request: any) => {
        this.requests = request;
      });
    }else{
      this.requests = this.commonService.getUserRequests(id_user).subscribe((request: any) => {
        this.requests = request;
      });
    }
  }


  cancelRequest(id_request: string) {
    this.commonService.cancelRequest(id_request as any).subscribe((request: any) => {
      this.myrequest = request
      window.location.reload();
    });

  }

}
