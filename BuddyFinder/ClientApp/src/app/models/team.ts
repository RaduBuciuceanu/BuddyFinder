import { Player } from './player';

export class Team {
    players: ReadonlyArray<Player>;
    confidence: string;

    constructor(init?: Partial<Team>) {
        Object.assign(this, init);
    }
}
