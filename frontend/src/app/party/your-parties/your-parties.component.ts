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
  id:any;
  constructor(private partyService: PartyService, private route: ActivatedRoute, private router: Router) {
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
      this.parties = this.partyService.listYourParty(id_user, this.id).subscribe(party => {
        this.parties = party;
      });
    }else{
      this.parties = this.partyService.listYourParties(id_user).subscribe(party => {
        this.parties = party;
      });
    }

  }

  delete(id: any) {
    this.partyService.delete(id).subscribe(party => {
      this.show();
    });
  }

}
