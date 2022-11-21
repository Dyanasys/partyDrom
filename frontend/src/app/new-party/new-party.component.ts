import {Component, OnInit} from '@angular/core';
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
  aChecked = true;
  sChecked = true;
  fakeVacancies = 2;
  fakeDirection = "calle fake, n21";
  fakeTitle = "Mega Fiesta en la Piscina";
  fakeDescription = "Mis amigos y yo vamos a celebrar una fiesta en la finca de mis abuelos";
  fakeDetails = "Primero quedaremos en el centro del pueblo y desde allí nos vamos en coche";
  fakePhone = "666123123";
  party: any;
  // parties: any;
  // dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
  }

  add(vacancies: string, title: string, description: string, photo: null, date: string, time: string, alcohol: boolean, smoke: boolean, location: string, address: string, meeting_details: string, phone_contact: string) {
    let numAlcohol = alcohol?1:0;
    let numSmoke = smoke?1:0;

    this.party = {
      'id_user': 1,
      'vacancies':parseInt(vacancies),
      'title': title,
      'description': description,
      'photo': photo,
      'date': date,
      'time': time,
      'alcohol': numAlcohol,
      'smoke': numSmoke,
      'id_location': parseInt(location),
      'address': address,
      'meeting_details': meeting_details,
      'phone_contact': phone_contact,
      'created_at': new Date()
    }

    this.partyService.add(this.party as any).subscribe(party => {
      this.party = party
    });

    this.router.navigateByUrl('/').then(r => {
      console.log('party added :)')
    });
  }

}
