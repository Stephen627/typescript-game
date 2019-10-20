import { Coordinates } from "./index";
import Sprite from "./entities/sprite";

export const Axis = {
    NONE: 1,
    HORIZONTAL: 2,
    VERTICAL: 3,
    BOTH: 4,
};

class Camera {
    protected width: number;
    protected height: number;
    protected center: Coordinates;
    private toFollow: Sprite;
    private readonly axis: number;

    constructor (width: number, height: number, axis: number = Axis.BOTH) {
        this.width = width;
        this.height = height;
        this.axis = axis;
        this.center = {
            x: 0,
            y: 0,
        };
    }

    public follow (toFollow: Sprite): void {
        this.toFollow = toFollow;
    }

    public getX(): number {
        return this.center.x;
    }

    public getY(): number {
        return this.center.y;
    }

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number {
       return this.width;
    }


    public onLoop (): void {
        if (this.toFollow != null) {
            if (this.axis == Axis.HORIZONTAL || this.axis == Axis.BOTH) {
                // moves camera on horizontal axis based on toFollow object position
                if (this.toFollow.getX() - this.center.x > this.width / 2)
                    this.center.x = this.toFollow.getX() - (this.width / 2);
                else if (this.toFollow.getX() < this.center.x)
                    this.center.x = this.toFollow.getX();

            }
            if (this.axis == Axis.VERTICAL || this.axis == Axis.BOTH) {
                // moves camera on vertical axis based on toFollow object position
                if (this.toFollow.getY() - this.center.y > this.height / 2)
                    this.center.y = this.toFollow.getY() - (this.height / 2);
                else if (this.toFollow.getY() < this.center.y)
                    this.center.y = this.toFollow.getY();
            }

        }
    }
}

export default Camera;
