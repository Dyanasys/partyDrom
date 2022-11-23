import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewPartyComponent} from "./party/new-party/new-party.component";
import {UpdatePartyComponent} from "./party/update-party/update-party.component";
import {PartiesComponent} from "./party/parties/parties.component";

const routes: Routes = [
  {
    path: '', component: PartiesComponent
  },
  {
    path: 'add', component: NewPartyComponent
  },
  {
    path: 'edit/:id', component: UpdatePartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
