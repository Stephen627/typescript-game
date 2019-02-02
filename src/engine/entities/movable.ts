import Sprite from './sprite';

export type Momentum = {
    x: number,
    y: number
}

abstract class Movable extends Sprite {
    protected movementRate: number = 1;
    protected momentum: Momentum = {
        x: 0,
        y: 0
    }

    public onLoop (): void {
        this.move();
    }

    public abstract isMoving(): boolean;
    public abstract move (): void;
}

export default Movable;
