export class Player {
  firstName: string;
  lastName: string;
  age: number;
  weight: string;

  constructor(init?: Partial<Player>) {
    Object.assign(this, init);
  }
}
