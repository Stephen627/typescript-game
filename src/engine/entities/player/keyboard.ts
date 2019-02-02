import Movable from '../movable';

const playerImage  = require('../../../assets/player.png');
const playerImage2 = require('../../../assets/player2.png');

export type HeldButtons = {
    w: boolean,
    a: boolean,
    s: boolean,
    d: boolean
}

class Player extends Movable {
    protected height: number = 16;
    protected width: number = 16;
    protected heldButtons: HeldButtons = {
        w: false,
        a: false,
        s: false,
        d: false
    }

    public init () {
        this.images = [
            playerImage,
            playerImage2
        ];
        this.registerEvents();
    }

    public move (): void {
        if (this.heldButtons.w) {
            this.moveUp();
        }
        if (this.heldButtons.a) {
            this.moveLeft();
        }
        if (this.heldButtons.s) {
            this.moveDown()
        };
        if (this.heldButtons.d) {
            this.moveRight();
        }
    }

    public isMoving (): boolean {
        return this.heldButtons.a 
            || this.heldButtons.d 
            || this.heldButtons.s 
            || this.heldButtons.w;
    }

    protected moveLeft (): void {
        this.coords.x -= this.movementRate;
    }

    protected moveRight  (): void {
        this.coords.x += this.movementRate;
    }

    protected moveUp (): void {
        this.coords.y -= this.movementRate;
    }

    protected moveDown (): void {
        this.coords.y += this.movementRate;
    }

    protected registerEvents (): void {
        document.addEventListener('keydown', (evt: KeyboardEvent) => {
            switch (evt.key) {
                case 'a':
                    this.heldButtons.a = true;
                    break;
                case 'w':
                    this.heldButtons.w = true;
                    break;
                case 's':
                    this.heldButtons.s = true;
                    break;
                case 'd':
                    this.heldButtons.d = true;
                    break;
            }
        });
        document.addEventListener('keyup', (evt: KeyboardEvent) => {
            switch (evt.key) {
                case 'a':
                    this.heldButtons.a = false;
                    break;
                case 'w':
                    this.heldButtons.w = false;
                    break;
                case 's':
                    this.heldButtons.s = false;
                    break;
                case 'd':
                    this.heldButtons.d = false;
                    break;
            }
        });
    }
}

export default Player;
