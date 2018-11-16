import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { delay } from 'rxjs/operators';

@Injectable()
export class TeamRepository {
    getAll(): Observable<ReadonlyArray<Team>> {
        return Observable.of(this.buildRandomTeams());
    }

    generateTeams(): Observable<any> {
        return Observable
            .of(3)
            .pipe(delay(3000));
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
