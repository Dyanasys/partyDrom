import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PartyService} from "../../services/party.service";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  parties: any; //esta variable se pasa al html
  session: any;
  locations: any;
  myrequest: any;

  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.getLocations();
    this.show();
  }

  show() {
    let id_user;
    if (sessionStorage['id_user']) {
      id_user = sessionStorage['id_user'];
    } else {
      id_user = null;
    }
    this.parties = this.partyService.listUsersParties(id_user).subscribe(parties => {
      this.parties = parties;
      console.log(this.parties);
    });
  }

  getLocations() {
    this.locations = this.commonService.listLocations().subscribe(locations => {
      this.locations = locations;
    });
  }

  delete(id: any) {
    this.partyService.delete(id).subscribe(party => {
      this.show();
      console.log(this.parties);
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
      this.router.navigateByUrl('/').then(r => {
        console.log('request sent :)')
      });
    });
  }

  cancelRequest(id_request: string) {
    this.commonService.cancelRequest(id_request as any).subscribe((request: any) => {
      this.myrequest = request
    });
  }
}
