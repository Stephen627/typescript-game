import World from './world';
import Collection from './util/collections/array';

class State {
    protected world: World = null;

    public constructor (world: World) {
        this.world = world;
    }

    public getWorld (): World {
        return this.world;
    }
}

class StateMachine {
    private static instance: StateMachine = null;
    private states: Collection<State> = new Collection();

    private constructor () {
        // Stub
    }

    public static getInstance (): StateMachine {
        if (StateMachine.instance === null) {
            StateMachine.instance = new StateMachine();
        }

        return StateMachine.instance;
    }

    public addState (state: State): void {
        this.states.push(state);
    }

    public getActiveState (): State {
        if (this.states.getLength() == 0) {
            throw new Error('There are not states in the game');
        }
        
        return this.states.get(this.states.getLength() - 1);
    }
}

export {
    StateMachine,
    State
}
