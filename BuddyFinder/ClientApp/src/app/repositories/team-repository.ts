import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable()
export class TeamRepository {
    getAll(): Observable<ReadonlyArray<Team>> {
        return Observable.of(this.buildRandomTeams());
    }

    private buildRandomTeams(): ReadonlyArray<Team> {
        return [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ];
    }
}
