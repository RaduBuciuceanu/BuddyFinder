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
import {ContainerComponent} from './container/container.component';
import {HomeComponent} from './home/home.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {PageContentComponent} from './page-content/page-content.component';
import {PageTitleComponent} from './page-title/page-title.component';
import {SectionComponent} from './section/section.component';
import {UserDetailsComponent} from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent, NavMenuComponent, HomeComponent, AllUsersComponent,
    SectionComponent, PageTitleComponent, UserDetailsComponent,
    ContainerComponent, PageContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule,
    ReactiveFormsModule, RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'all-users', component: AllUsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
