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
  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.getLocations();
    this.show();
  }

  show() {
    this.parties = this.partyService.listUsersParties().subscribe(parties => {
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

}
