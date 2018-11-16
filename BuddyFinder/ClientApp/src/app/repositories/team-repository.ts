import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { delay } from 'rxjs/operators';
import { Player } from '../models/player';

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
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' }),
            new Team({ players: this.buildRandomPlayers(), confidence: '30.123123141' })
        ];
    }

    private buildRandomPlayers(): ReadonlyArray<Player> {
        return [
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
            new Player({ firstName: 'John', lastName: 'Smith', age: 30, weight: '50 kg' }),
        ];
    }
}
