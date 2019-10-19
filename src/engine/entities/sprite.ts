export type Coordinates = {
    x: number,
    y: number
}

export type Image = {
    hasLoaded: boolean,
    data: HTMLImageElement
}

abstract class Sprite {
    protected images: Array<string>;
    protected width: number;
    protected height: number;
    protected frameChangeDelay: number = 15;
    protected coords: Coordinates = {
        x: 0,
        y: 0
    };

    private readonly imageElements: Array<Image> = [];
    private nextImageIndex: number = 0;
    

    public constructor () {
        this.init();
        this.imageElements = this.loadImages(this.images);
    }

    public loadImages (images: Array<string>): Array<Image> {
        const imageElements: Array<Image> = [];
        images.forEach((image: string) => {
            const imgEl: HTMLImageElement = new Image();
            imgEl.src = image;
            imageElements.push({
                hasLoaded: false,
                data: imgEl
            });
        });

        return imageElements;
    }

    /**
     * Gets the image for the sprite and moves to pointer
     * to the next image.
     * 
     * @return string
     */
    public getImage (): Image|null {
        const imageElements = this.getImageElements();
        if (imageElements.length === 0) {
            return null;
        }

        let index: number = Math.ceil(this.nextImageIndex / this.frameChangeDelay) - 1;
        if (typeof imageElements[index] === 'undefined') {
            index = 0;
            this.nextImageIndex = 0;
        }

        this.nextImageIndex += 1;
        return imageElements[index];
    }

    public getImageElements (): Array<Image> {
        return this.imageElements;
    }

    public getX (): number {
        return this.coords.x;
    }

    public getY (): number {
        return this.coords.y;
    }

    public getWidth (): number {
        return this.width;
    }

    public getHeight (): number {
        return this.height;
    }

    /**
     * Initialise the sprite (get the image loaded etc)
     */
    public abstract init (): void;
    public abstract onLoop (): void;
}

export default Sprite;
