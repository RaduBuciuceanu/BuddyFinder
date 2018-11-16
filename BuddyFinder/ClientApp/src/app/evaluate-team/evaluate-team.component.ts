import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamRepository } from '../repositories/team-repository';
import { Team } from '../models/team';
import { LoadingService } from '../services/loading-service';
import { tap, switchMap, delay } from 'rxjs/operators';

@Component({
    selector: 'bf-evaluate-team',
    templateUrl: './evaluate-team.component.html',
    styleUrls: ['./evaluate-team.component.css']
})
export class EvaluateTeamComponent implements OnInit {
    teams: Observable<ReadonlyArray<Team>>;
    selectedTeam: string;
    selectedOption: string;

    constructor(private loadingService: LoadingService, private teamRepository: TeamRepository) { }

    ngOnInit(): void {
        this.teams = this.loadingService
            .execute(true)
            .pipe(switchMap(() => this.teamRepository.getAll()))
            .pipe(tap(() => this.loadingService.execute(false).subscribe()));
    }

    evaluate(): void {
        this.loadingService
            .execute(true)
            .pipe(delay(2000))
            .pipe(tap(() => this.loadingService.execute(false).subscribe()))
            .subscribe();
    }
}
