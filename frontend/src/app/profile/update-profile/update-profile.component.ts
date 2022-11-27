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
    if(this.profile.public_name.trim()){
      this.commonService.updateProfile(this.id, this.profile).subscribe((res) => {
        this.router.navigateByUrl('/profile').then(r => console.log(res));
      });
    }else{
      alert('El nombre público no puede estar vacío');
      this.router.navigateByUrl('/edit-profile/'+ this.id).then(r => console.log(r));
    }

  }

  delete(id: any) {
    this.commonService.deleteProfile(id).subscribe(profile => {
      this.show();
    });
  }

}
