import {Component, OnInit} from '@angular/core';
import {PartyService} from "../../services/party.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  party: any; //esta variable se pasa al html
  session: any;
  myrequest: any;
  id: any;

  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.party = this.partyService.find(this.id).subscribe(party => {
      this.party = party;
    });
  }

  delete(id: any) {
    this.partyService.delete(id).subscribe(party => {
      this.show();
    });
  }

  request(id_party: string) {
    let id_user = sessionStorage['id_user'];

    this.myrequest = {
      'id_user': parseInt(id_user),
      'id_party': parseInt(id_party),
    }

    this.commonService.createRequest(this.myrequest as any).subscribe((request: any) => {
      this.myrequest = request
    });

  }

  cancelRequest(id_request: string) {
    this.commonService.cancelRequest(id_request as any).subscribe((request: any) => {
      this.myrequest = request
    });

  }

}
