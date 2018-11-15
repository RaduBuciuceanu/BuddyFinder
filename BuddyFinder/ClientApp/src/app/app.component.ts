import { Component } from '@angular/core';
import { LoadingService } from './services/loading-service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'bf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading: boolean;

  constructor(loadingService: LoadingService) {
    loadingService
      .isLoadingChanged
      .pipe(tap((value) => this.isLoading = value))
      .subscribe();
  }


}
