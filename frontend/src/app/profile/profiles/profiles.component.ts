import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  profiles: any; //esta variable se pasa al html
  session: any;
  id: any;

  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    const routeParams = this.route.snapshot.paramMap;
    if (routeParams.get('id')) {
      this.id = Number(routeParams.get('id'));
    } else {
      this.id = sessionStorage['id_user'];
    }
    this.profiles = this.commonService.listProfiles(this.id).subscribe(profiles => {
      profiles.forEach((profile: { birth_date: any; age: number; }) => {
          if (profile.birth_date) {
            let birthdate = new Date(profile.birth_date);
            let timeDiff = Math.abs(Date.now() - birthdate.getTime());
            profile.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
          }
        }
      );
      this.profiles = profiles;
    });
  }

  delete(id: any) {
    this.commonService.deleteProfile(id).subscribe(profiles => {
      this.show();
    });
  }

}
