import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'bf-top-nav-menu',
    templateUrl: './top-nav-menu.component.html',
    styleUrls: ['./top-nav-menu.component.css']
})
export class TopNavMenuComponent {
    static toggle = false;

    open(): void {
        if (TopNavMenuComponent.toggle) {
            $('#left-nav-menu')
                .css('visibility', 'hidden');
        } else {
            $('#left-nav-menu')
                .css('visibility', 'visible');
        }

        TopNavMenuComponent.toggle = !TopNavMenuComponent.toggle;
    }

    onWindowResized(): void {
        if (window.innerWidth >= 1046) {
            $('#left-nav-menu')
                .css('visibility', 'visible');
        } else {
            $('#left-nav-menu')
                .css('visibility', 'hidden');
        }
    }
}
