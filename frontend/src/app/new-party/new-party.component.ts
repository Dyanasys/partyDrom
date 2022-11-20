import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PartyService} from "../services/party.service";

@Component({
  selector: 'app-new-party',
  templateUrl: './new-party.component.html',
  styleUrls: ['./new-party.component.scss']
})
export class NewPartyComponent implements OnInit {
  constructor(private partyService: PartyService, private router: Router) {
  }

  party: any;
  // parties: any;
  // dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
  }

  add(title: string, description: string, id_location: string) {
    this.party = {
      'title': title,
      'description': description,
      'id_location': id_location
    }

    this.partyService.add(this.party as any).subscribe(party => {
      this.party = party
    });

    this.router.navigateByUrl('/').then(r => {
      console.log('party added :)')
    });
  }

}
