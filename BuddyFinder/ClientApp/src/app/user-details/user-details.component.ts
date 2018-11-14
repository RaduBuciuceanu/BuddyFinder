import {Component, Input} from '@angular/core';

@Component({
  selector: 'bf-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user: any;
}
