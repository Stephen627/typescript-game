export type Coordinates = {
    x: number,
    y: number
};

export class Rectangle {
    public left: number;
    public top: number;
    public width: number;
    public height: number;
    public right: number;
    public bottom: number;

    constructor (left: number = 0, top: number = 0, width: number = 0, height: number = 0) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    }


    public set (left: number, top: number, width: number = null, height: number = null): void {
        this.left = left;
        this.top = top;
        this.width = width || this.width;
        this.height = height || this.height;
        this.right = (this.left + this.width);
        this.bottom = (this.top + this.height);
    }

    public within (rect: Rectangle): boolean {
        return (rect.left <= this.left &&
            rect.right >= this.right &&
            rect.top <= this.top &&
            rect.bottom >= this.bottom);
    }

    public overlaps (rect: Rectangle): boolean {
        return (this.left < rect.right &&
            rect.left < this.right &&
            this.top < rect.bottom &&
            rect.top < this.bottom);
    }
}
