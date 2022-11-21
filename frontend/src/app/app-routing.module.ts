import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewPartyComponent} from "./new-party/new-party.component";
import {UpdatePartyComponent} from "./update-party/update-party.component";

const routes: Routes = [
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
