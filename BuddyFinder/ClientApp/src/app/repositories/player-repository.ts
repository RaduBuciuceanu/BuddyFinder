import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Player } from '../models/player';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class PlayerRepository {
  private static players: Array<Player>;

  constructor() {
    PlayerRepository.players = [
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

  getAll(): Observable<ReadonlyArray<Player>> {
    return Observable.of(PlayerRepository.players);
  }

  insert(player: Player): Observable<any> {
    return Observable
      .of(player)
      .pipe(delay(3000))
      .pipe(tap(() => PlayerRepository.players.push(player)));
  }
}
