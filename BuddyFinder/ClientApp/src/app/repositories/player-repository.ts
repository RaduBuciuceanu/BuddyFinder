import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Player} from '../models/player';

@Injectable()
export class PlayerRepository {
  getAll(): Observable<ReadonlyArray<Player>> {
    return Observable.of(this.buildRandomPlayers());
  }

  private buildRandomPlayers(): ReadonlyArray<Player> {
    return [
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      },
      {
        firstName: 'Random first name here.',
        lastName: 'Random last name here.',
        age: 19,
        weight: '30 kg'
      }
    ];
  }
}
