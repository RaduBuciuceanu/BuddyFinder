import { Player } from './player';

export class Team {
    players: ReadonlyArray<Player>;

    constructor(init?: Partial<Team>) {
        Object.assign(this, init);
    }
}
