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
    teams: ReadonlyArray<ReadonlyArray<Team>>;

    constructor(private teamRepository: TeamRepository) { }

    ngOnInit(): void {
        this.teamRepository
            .getAll()
            .pipe(tap((teams) => this.teams = this.splitTeams(teams)))
            .subscribe();
    }

    private splitTeams(teams: ReadonlyArray<Team>): ReadonlyArray<ReadonlyArray<Team>> {
        const result = [[]];

        teams.forEach((_, index) => {
            if (index !== 0 && index % 3 === 0) {
                const temporary = [];

                temporary.push(teams[index]);
                temporary.push(teams[index - 1]);
                temporary.push(teams[index - 2]);

                result.push(temporary);
            }
        });

        return result;
    }
}
