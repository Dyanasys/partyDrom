import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  profile: any; //esta variable se pasa al html
  session: any;
  id: any;
  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.show();
  }

  show() {
    this.profile = this.commonService.findProfile().subscribe(profile => {
      this.profile = profile;
      this.id = profile.id;
    });
  }

  update(){
    this.commonService.updateProfile(this.id, this.profile).subscribe((res) => {
      this.router.navigateByUrl('/profile').then(r => console.log(res));
    });
  }

  delete(id: any) {
    this.commonService.deleteProfile(id).subscribe(profile => {
      this.show();
    });
  }

}
