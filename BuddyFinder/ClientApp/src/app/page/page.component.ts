import { Component, Input } from '@angular/core';

@Component({
    selector: 'bf-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent {
    @Input() title: string;
}
