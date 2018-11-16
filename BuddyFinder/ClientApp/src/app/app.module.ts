import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { AllTeamsComponent } from './all-teams/all-teams.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { LeftNavMenuComponent } from './nav-menu/left-nav-menu.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { SectionComponent } from './section/section.component';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerRepository } from './repositories/player-repository';
import { TeamRepository } from './repositories/team-repository';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { LoadingService } from './services/loading-service';
import { LoadingComponent } from './loading/loading.component';
import { PageComponent } from './page/page.component';
import { EvaluateTeamComponent } from './evaluate-team/evaluate-team.component';

@NgModule({
    declarations: [
        AppComponent, LeftNavMenuComponent, HomeComponent, AllPlayersComponent,
        SectionComponent, PageTitleComponent, PlayerDetailsComponent,
        ContainerComponent, PageContentComponent, AllTeamsComponent,
        TopNavMenuComponent, CreatePlayerComponent, LoadingComponent, PageComponent, EvaluateTeamComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule,
        ReactiveFormsModule, RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'all-players', component: AllPlayersComponent },
            { path: 'all-teams', component: AllTeamsComponent },
            { path: 'create-player', component: CreatePlayerComponent },
            { path: 'evaluate-team', component: EvaluateTeamComponent },
        ])
    ],
    providers: [
        LoadingService,
        PlayerRepository,
        TeamRepository
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic()
    .bootstrapModule(AppModule);
