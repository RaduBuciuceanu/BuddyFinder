import { Component } from '@angular/core';
import { PlayerRepository } from '../repositories/player-repository';
import { FormControl, Validators } from '@angular/forms';
import { LoadingService } from '../services/loading-service';
import { delay, switchMap } from 'rxjs/operators';

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

    constructor(private playerRepository: PlayerRepository, private loadingService: LoadingService) {
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

    save(): void {
        this.loadingService
            .execute(true)
            .pipe(delay(3000))
            .pipe(switchMap((_) => this.loadingService.execute(false)))
            .subscribe();
    }

    private isValid(value: string): boolean {
        return value !== undefined && value !== '';
    }
}
