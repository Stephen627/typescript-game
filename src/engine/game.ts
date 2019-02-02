import { StateMachine } from "./states";

abstract class Game {
    protected canvas: HTMLCanvasElement = null;
    protected stateMachine: StateMachine = null;

    public constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.stateMachine = StateMachine.getInstance();

        this.registerStates();
    }

    public start (): void {
        this.loop();
    }

    protected abstract registerStates(): void;
    
    /**
     * The game loop
     */
    private loop () {
        this.stateMachine
            .getActiveState()
            .getWorld()
            .onLoop();
        
        window.requestAnimationFrame(() => this.loop());
    }
}

export default Game;
