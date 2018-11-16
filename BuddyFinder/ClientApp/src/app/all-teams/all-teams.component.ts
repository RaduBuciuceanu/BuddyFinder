import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamRepository } from '../repositories/team-repository';
import { tap, delay, switchMap } from 'rxjs/operators';
import { LoadingService } from '../services/loading-service';
import { pipe } from 'rxjs';

@Component({
    selector: 'bf-all-teams',
    templateUrl: './all-teams.component.html',
    styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {
    teams: ReadonlyArray<ReadonlyArray<Team>>;

    constructor(private loadingService: LoadingService, private teamRepository: TeamRepository) { }

    ngOnInit(): void {
        this.teamRepository
            .getAll()
            .pipe(tap((teams) => this.teams = this.splitTeams(teams)))
            .subscribe();
    }

    generateTeams(): void {
        this.loadingService
            .execute(true)
            .pipe(switchMap(() => this.teamRepository.generateTeams()))
            .pipe(switchMap(() => this.loadingService.execute(false)))
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
