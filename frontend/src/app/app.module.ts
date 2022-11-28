import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesComponent} from './myarticles/articles/articles.component';
import {NewArticleComponent} from './myarticles/new-article/new-article.component';
import {EditArticleComponent} from './myarticles/edit-article/edit-article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { PartiesComponent } from './party/parties/parties.component';
import { NewPartyComponent } from './party/new-party/new-party.component';
import { UpdatePartyComponent } from './party/update-party/update-party.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './user/login/login.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { YourPartiesComponent } from './party/your-parties/your-parties.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AdminPartiesComponent } from './party/admin-parties/admin-parties.component';
import { UsersComponent } from './user/users/users.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RequestsComponent } from './request/requests/requests.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { ProfilesComponent } from './profile/profiles/profiles.component';
import {MatSelectModule} from "@angular/material/select";
import { PartyComponent } from './party/party/party.component';
import { PartyRequestsComponent } from './request/party-requests/party-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewArticleComponent,
    EditArticleComponent,
    PartiesComponent,
    NewPartyComponent,
    UpdatePartyComponent,
    LoginComponent,
    NewUserComponent,
    YourPartiesComponent,
    AdminPartiesComponent,
    UsersComponent,
    UpdateUserComponent,
    ProfileComponent,
    RequestsComponent,
    UpdateProfileComponent,
    ProfilesComponent,
    PartyComponent,
    PartyRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
