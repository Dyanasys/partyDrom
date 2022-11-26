import { Component, OnInit } from '@angular/core';
import {PartyService} from "../../services/party.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-your-parties',
  templateUrl: './your-parties.component.html',
  styleUrls: ['./your-parties.component.scss']
})
export class YourPartiesComponent implements OnInit {

  parties: any; //esta variable se pasa al html
  session: any;
  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    this.parties = this.partyService.listYourParties().subscribe(party => {
      this.parties = party;
      console.log(this.parties);
    });
  }

  delete(id: any) {
    this.partyService.delete(id).subscribe(party => {
      this.show();
      console.log(this.parties);
    });
  }

}
