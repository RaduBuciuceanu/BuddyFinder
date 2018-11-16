import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Player } from '../models/player';
import { delay } from 'rxjs/operators';

@Injectable()
export class PlayerRepository {
  getAll(): Observable<ReadonlyArray<Player>> {
    return Observable.of(this.buildRandomPlayers());
  }

  insert(player: Player): Observable<any> {
    return Observable
      .of(1)
      .pipe(delay(3000));
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
