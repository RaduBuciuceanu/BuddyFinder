import { Component, OnInit, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Player } from '../models/player';
import { PlayerRepository } from '../repositories/player-repository';

@Component({
    selector: 'bf-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
    users: ReadonlyArray<Player>;

    constructor(private playerRepository: PlayerRepository) { }

    ngOnInit(): void {
        this.playerRepository
            .getAll()
            .pipe(tap(players => (this.users = players)))
            .subscribe();
    }
}
