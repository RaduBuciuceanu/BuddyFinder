import {Component, Input} from '@angular/core';

@Component({
  selector: 'bf-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {
  @Input() player: any;
}
