import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PartyService} from "../../services/party.service";

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  parties: any; //esta variable se pasa al html
  session: any;
  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    this.parties = this.partyService.list().subscribe(party => {
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
