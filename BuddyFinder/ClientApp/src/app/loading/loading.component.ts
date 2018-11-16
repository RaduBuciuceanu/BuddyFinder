import { Component } from '@angular/core';
import { LoadingService } from '../services/loading-service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'bf-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
    isLoading: boolean;

    constructor(private loadingService: LoadingService) {
        this.isLoading = true;

        this.loadingService
            .isLoadingChanged
            .pipe(tap((value) => this.doSomeShit(value)))
            .subscribe();
    }

    private doSomeShit(value: boolean): void {
        this.isLoading = value;
    }
}
