import EventDispatcher from './event-dispatcher';
import { Sprite } from './entities';

abstract class World {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private sprites: Array<Sprite> = [];

    constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        this.registerEvents();
        this.init();
    }

    public addSprite (sprite: Sprite): void {
        this.sprites.push(sprite);
    }

    public onLoop (): void {
        this.clear();
        this.sprites.forEach((sprite: Sprite) => {
            this.drawSprite(sprite);
            sprite.onLoop();
        });
    }
    
    protected clear (): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    protected drawSprite (sprite: Sprite): void {
        // TODO: The image load logic needs to be moved to a load screen
        // Everything should be ready for the world to use
        const image = sprite.getImage();
        image.hasLoaded = true;
        this.context.drawImage(
            image.data,
            sprite.getX(),
            sprite.getY(),
            sprite.getWidth(),
            sprite.getHeight()
        ); 
    }

    protected registerEvents (): void {
    }

    protected abstract init (): void;

}

export default World;
