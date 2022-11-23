import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewPartyComponent} from "./party/new-party/new-party.component";
import {UpdatePartyComponent} from "./party/update-party/update-party.component";
import {PartiesComponent} from "./party/parties/parties.component";
import {NewUserComponent} from "./user/new-user/new-user.component";
import {LoginComponent} from "./user/login/login.component";
import {YourPartiesComponent} from "./party/your-parties/your-parties.component";

const routes: Routes = [
  {
    path: '', component: PartiesComponent
  },
  {
    path: 'add', component: NewPartyComponent
  },
  {
    path: 'edit/:id', component: UpdatePartyComponent
  },
  {
    path: 'signup', component: NewUserComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'your-parties', component: YourPartiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
