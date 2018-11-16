import { Component, AfterViewInit, OnInit } from '@angular/core';
import { tap, switchMap, share, delay } from 'rxjs/operators';

import { Player } from '../models/player';
import { PlayerRepository } from '../repositories/player-repository';
import { LoadingService } from '../services/loading-service';
import { Observable } from 'rxjs';

@Component({
    selector: 'bf-all-players',
    templateUrl: './all-players.component.html',
    styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
    players: Observable<ReadonlyArray<Player>>;

    constructor(private loadingService: LoadingService,
        private playerRepository: PlayerRepository) { }

    ngOnInit(): void {
        this.players = this.loadingService
            .execute(true)
            .pipe(switchMap((_) => this.playerRepository.getAll()))
            .pipe(tap((_) => this.loadingService.execute(false).subscribe()));
    }

}
