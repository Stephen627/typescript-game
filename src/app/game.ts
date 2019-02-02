import EngineGame from '../engine/game';
import GameWorld from './worlds/game';
import { State } from '../engine/states';

class Game extends EngineGame {
    private world: GameWorld;

    protected registerStates (): void {
        this.world  = new GameWorld(this.canvas);
        this.stateMachine.addState(
            new State(this.world)
        );
    }
}

export default Game;
