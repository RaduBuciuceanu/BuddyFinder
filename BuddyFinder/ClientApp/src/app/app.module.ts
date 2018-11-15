import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { AllTeamsComponent } from './all-teams/all-teams.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { LeftNavMenuComponent } from './nav-menu/left-nav-menu.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { SectionComponent } from './section/section.component';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PlayerRepository } from './repositories/player-repository';

@NgModule({
  declarations: [
    AppComponent, LeftNavMenuComponent, HomeComponent, AllUsersComponent,
    SectionComponent, PageTitleComponent, UserDetailsComponent,
    ContainerComponent, PageContentComponent, AllTeamsComponent,
    TopNavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule,
    ReactiveFormsModule, RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'all-users', component: AllUsersComponent },
      { path: 'all-teams', component: AllTeamsComponent }
    ])
  ],
  providers: [
    PlayerRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);
