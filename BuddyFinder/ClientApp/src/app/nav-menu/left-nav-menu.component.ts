import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bf-left-nav-menu',
    templateUrl: './left-nav-menu.component.html',
    styleUrls: ['./left-nav-menu.component.css']
})
export class LeftNavMenuComponent {

    constructor(private router: Router) { }

    navigateTo(page: string): void {
        this.router.navigate([page]);
    }
}
