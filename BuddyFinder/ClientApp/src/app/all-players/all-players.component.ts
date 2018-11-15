import { Component, OnInit, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Player } from '../models/player';
import { PlayerRepository } from '../repositories/player-repository';

@Component({
    selector: 'bf-all-players',
    templateUrl: './all-players.component.html',
    styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
    players: ReadonlyArray<Player>;

    constructor(private playerRepository: PlayerRepository) { }

    ngOnInit(): void {
        this.playerRepository
            .getAll()
            .pipe(tap(players => (this.players = players)))
            .subscribe();
    }
}
