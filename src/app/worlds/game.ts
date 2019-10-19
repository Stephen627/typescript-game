import World from "../../engine/World";
import {  KeyboardPlayer } from "../../engine/entities";

class GameWorld extends World {
    private player: KeyboardPlayer = null;

    protected init (): void {
        this.player = new KeyboardPlayer();
        this.addSprite(this.player);
    }
}

export default GameWorld;
