import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PartyService} from "../../services/party.service";

@Component({
  selector: 'app-new-party',
  templateUrl: './new-party.component.html',
  styleUrls: ['./new-party.component.scss']
})
export class NewPartyComponent implements OnInit {
  constructor(private partyService: PartyService, private router: Router) {
  }
  aChecked = true;
  sChecked = false;
  fakeVacancies = 2;
  fakeDirection = "FAKE ADDRESS";
  fakeTitle = "FAKE PARTY";
  fakeDescription = "FAKE DESCRIPTION";
  fakeDetails = "FAKE DETAILS";
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
      'id_user': sessionStorage['id_user'],
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
      this.router.navigateByUrl('/your-parties').then(r => {
        console.log('party added :)')
      });
    },error =>{
      alert('parece que te ha faltado algún dato, vuelve a intentarlo');
      this.router.navigateByUrl('/add').then(r => {
        console.log('party added :)')
      });
    } );


  }

}
