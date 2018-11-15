import { Component } from '@angular/core';
import { PlayerRepository } from '../repositories/player-repository';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'bf-create-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {
    readonly formControl: FormControl;

    firstName: string;
    lastName: string;
    age: string;
    height: string;
    weight: string;
    experience: string;
    matchesPerMonth: string;

    constructor(private playerRepository: PlayerRepository) {
        this.formControl = new FormControl('', [Validators.required]);
    }

    get canSave(): boolean {
        return this.isValid(this.firstName) &&
            this.isValid(this.lastName) &&
            this.isValid(this.age) &&
            this.isValid(this.height) &&
            this.isValid(this.weight) &&
            this.isValid(this.experience) &&
            this.isValid(this.matchesPerMonth) &&
            !this.formControl.hasError('required');
    }

    private isValid(value: string): boolean {
        return value !== undefined && value !== '';
    }
}
