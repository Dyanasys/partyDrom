import { Component, OnInit } from '@angular/core';
import {PartyService} from "../../services/party.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-parties',
  templateUrl: './admin-parties.component.html',
  styleUrls: ['./admin-parties.component.scss']
})
export class AdminPartiesComponent implements OnInit {

  parties: any; //esta variable se pasa al html
  session: any;
  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    this.parties = this.partyService.listUsersParties().subscribe(party => {
      this.parties = party;
    });
  }

  delete(id: any) {
    this.partyService.delete(id).subscribe(party => {
      this.show();
    });
  }


}
