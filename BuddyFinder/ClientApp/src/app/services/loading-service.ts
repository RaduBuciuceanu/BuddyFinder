import { Service } from './service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService implements Service<boolean, boolean> {
    static isLoading: boolean;

    readonly isLoadingChanged: Subject<boolean>;

    constructor() {
        this.isLoadingChanged = new Subject<boolean>();

        LoadingService.isLoading = false;
    }

    execute(isLoading: boolean): Observable<boolean> {
        return Observable
            .of(isLoading)
            .pipe(tap((value) => LoadingService.isLoading = value))
            .pipe(tap((value) => this.isLoadingChanged.next(value)));
    }
}
