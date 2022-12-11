import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewPartyComponent} from "./party/new-party/new-party.component";
import {UpdatePartyComponent} from "./party/update-party/update-party.component";
import {PartiesComponent} from "./party/parties/parties.component";
import {NewUserComponent} from "./user/new-user/new-user.component";
import {LoginComponent} from "./user/login/login.component";
import {YourPartiesComponent} from "./party/your-parties/your-parties.component";
import {AdminPartiesComponent} from "./party/admin-parties/admin-parties.component";
import {UsersComponent} from "./user/users/users.component";
import {UpdateUserComponent} from "./user/update-user/update-user.component";
import {ProfileComponent} from "./profile/profile/profile.component";
import {ProfilesComponent} from "./profile/profiles/profiles.component";
import {UpdateProfileComponent} from "./profile/update-profile/update-profile.component";
import {RequestsComponent} from "./request/requests/requests.component";
import {PartyComponent} from "./party/party/party.component";
import {PartyRequestsComponent} from "./request/party-requests/party-requests.component";

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
  },
  {
    path: 'your-parties/:id', component: YourPartiesComponent
  },
  {
    path: 'party/:id', component: PartyComponent
  },
  {
    path: 'admin-parties', component: AdminPartiesComponent
  },
  {
    path: 'admin-users', component: UsersComponent
  },
  {
    path: 'edit-user/:id', component: UpdateUserComponent
  },
  {
    path: 'add-user', component: NewUserComponent
  },
  {
    path: 'admin-profiles', component: ProfilesComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'profile/:id', component: ProfileComponent
  },
  {
    path: 'edit-profile/:id', component: UpdateProfileComponent
  },
  {
    path: 'user-requests', component: RequestsComponent
  },
  {
    path: 'user-requests/:id', component: RequestsComponent
  },
  {
    path: 'party-requests/:id', component: PartyRequestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
