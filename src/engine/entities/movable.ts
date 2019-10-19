import Sprite, {Image} from './sprite';

export type Momentum = {
    x: number,
    y: number
}

abstract class Movable extends Sprite {
    protected movementRate: number = 1;
    protected movementImages: Array<string>;
    private readonly movementImageElements: Array<Image> = [];

    protected momentum: Momentum = {
        x: 0,
        y: 0
    };

    public constructor () {
        super();
        this.movementImageElements = this.loadImages(this.movementImages);
    }

    public onLoop (): void {
        this.move();
    }

    public getImage (): Image|null {
        if (!this.isMoving()) {
            return super.getImage();
        }
        return super.getImage();
    }

    public getImageElements(): Array<Image> {
        if (this.isMoving()) {
            return this.movementImageElements;
        }
        return super.getImageElements();
    }

    public abstract isMoving(): boolean;
    public abstract move (): void;
}

export default Movable;
