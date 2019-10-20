import Camera from './camera';
import { Sprite } from './entities';

abstract class World {
    protected height: number;
    protected width: number;
    protected camera: Camera;
    protected backgroundImage: HTMLImageElement;
    private canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;
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
        this.fillBackground();
        this.sprites.forEach((sprite: Sprite) => {
            sprite.onLoop();

            if (sprite.getX() < 0) {
                sprite.setX(0);
            }
            if (sprite.getY() < 0) {
                sprite.setY(0);
            }
            if (sprite.getX() + sprite.getWidth() > this.width) {
                sprite.setX(this.width - sprite.getHeight());
            }
            if (sprite.getY() + sprite.getHeight() > this.height) {
                sprite.setY(this.height - sprite.getHeight());
            }

            this.drawSprite(sprite);
        });
        this.camera.onLoop();
    }

    public getWidth (): number {
        return this.width;
    }

    public getHeight (): number {
        return this.height;
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
            sprite.getX() - this.camera.getX(),
            sprite.getY() - this.camera.getY(),
            sprite.getWidth(),
            sprite.getHeight()
        ); 
    }

    protected fillBackground (): void {
        if (typeof this.backgroundImage !== 'undefined') {
            this.getContext().drawImage(this.backgroundImage, this.width, this.height);
        } else {
            this.context.fillStyle = 'black';
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.fillStyle = 'white';
            this.context.fillRect(0, 0, this.width, this.height);

            this.backgroundImage = new Image();
            this.backgroundImage.src = this.context.canvas.toDataURL('image/png');
        }
    }

    protected getContext (): CanvasRenderingContext2D {
        return this.context;
    }

    protected registerEvents (): void {
    }

    protected abstract init (): void;

}

export default World;
