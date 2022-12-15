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
  session: any;
  constructor(private route: ActivatedRoute, private router: Router, private partyService: PartyService) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
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
      if(this.party.id_user == this.session.id_user || !this.session.is_admin){
        this.router.navigateByUrl('/your-parties').then(r => console.log(r));
      }else{
        this.router.navigateByUrl('/admin-parties').then(r => console.log(r));
      }
    });
  }

}
