import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-party-requests',
  templateUrl: './party-requests.component.html',
  styleUrls: ['./party-requests.component.scss']
})
export class PartyRequestsComponent implements OnInit {

  requests: any; //esta variable se pasa al html
  session: any;
  locations: any;
  myrequest: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.requests = this.commonService.getPartyRequests(this.id).subscribe((request: any) => {
      this.requests = request;
    });
  }

  cancelRequest(id_request: string) {
    this.commonService.cancelRequest(id_request as any).subscribe((request: any) => {
      this.myrequest = request
      window.location.reload();
    });

  }

  declineRequest(id_request: string) {
    this.commonService.declineRequest(id_request as any).subscribe((request: any) => {
      this.myrequest = request
      window.location.reload();
    });

  }

  acceptRequest(id_request: string) {
    this.commonService.acceptRequest(id_request as any).subscribe((request: any) => {

      if (request != '0') {
        this.myrequest = request
        window.location.reload();
      } else {
        alert('ya has agotado todas tus invitaciones');
      }
    });
  }

}
