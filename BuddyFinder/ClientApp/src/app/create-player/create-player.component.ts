import { Component } from '@angular/core';
import { PlayerRepository } from '../repositories/player-repository';

@Component({
    selector: 'bf-create-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {
    constructor(private playerRepository: PlayerRepository) { }
}
