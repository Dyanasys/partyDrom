import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PartyService} from "../../services/party.service";

@Component({
  selector: 'app-update-party',
  templateUrl: './update-party.component.html',
  styleUrls: ['./update-party.component.scss']
})
export class UpdatePartyComponent implements OnInit {
  id: any;
  party: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private partyService: PartyService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    console.log("id of party: " + this.id);
    this.sub = this.partyService.find(this.id).subscribe((data: any) => {
      this.party = data;
      console.log("Article for editing: " + JSON.stringify(this.party));
    });
  }

  update() {
    this.partyService.update(this.id, this.party).subscribe((res) => {
      this.router.navigateByUrl('/').then(r => console.log("router navigate of edit"));
    });
  }

}
