import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {MaterialModule} from '../material/material.module';

import {AllUsersComponent} from './all-users/all-users.component';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {HomeComponent} from './home/home.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {PageTitleComponent} from './page-title/page-title.component';
import {SectionComponent} from './section/section.component';
import {UserDetailsComponent} from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent, NavMenuComponent, HomeComponent, CounterComponent,
    FetchDataComponent, AllUsersComponent, SectionComponent, PageTitleComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule,
    ReactiveFormsModule, RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
      {path: 'all-users', component: AllUsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
