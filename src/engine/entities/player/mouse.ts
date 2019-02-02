import Movable from '../movable';
import { Coordinates } from '../sprite';

const playerImage  = require('../../../assets/player.png');
const playerImage2 = require('../../../assets/player2.png');

class Mouse extends Movable {
    protected movementRate = 2;
    protected height: number = 16;
    protected width: number = 16;
    protected goTo: Coordinates = {
        x: null,
        y: null
    };

    public init (): void {
        this.images = [
            playerImage,
            playerImage2
        ];

        this.registerEvents();
    }

    public isMoving (): boolean {
        return false;
    }

    public move (): void {
        if (this.goTo.x === null || this.goTo.y === null) {
            return;
        }

        if (this.coords.x <= this.goTo.x - this.movementRate || this.coords.x >= this.goTo.x + this.movementRate) {
            this.coords.x += this.goTo.x < this.coords.x
                ? this.movementRate * -1
                : this.movementRate;
        }
        if (this.coords.y <= this.goTo.y - this.movementRate || this.coords.y >= this.goTo.y + this.movementRate) {
            this.coords.y += this.goTo.y < this.coords.y
                ? this.movementRate * -1
                : this.movementRate;
        }
    }

    protected registerEvents (): void {
        document.addEventListener('click', (evt: MouseEvent) => {
            this.goTo = {
                x: evt.clientX,
                y: evt.clientY
            };
        });
    }
}

export default Mouse;
