import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamRepository } from '../repositories/team-repository';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'bf-all-teams',
    templateUrl: './all-teams.component.html',
    styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {
    teams: ReadonlyArray<Team>;

    constructor(private teamRepository: TeamRepository) { }

    ngOnInit(): void {
        this.teamRepository
            .getAll()
            .pipe(tap((teams) => this.teams = teams))
            .subscribe();
    }
}
