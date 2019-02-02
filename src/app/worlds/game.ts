import World from "../../engine/World";
import {  MousePlayer } from "../../engine/entities";

class GameWorld extends World {
    private player: MousePlayer = null;

    protected init (): void {
        this.player = new MousePlayer();
        this.addSprite(this.player);
    }
}

export default GameWorld;
