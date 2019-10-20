import World from "../../engine/World";
import Camera from '../../engine/camera';
import {  KeyboardPlayer } from "../../engine/entities";

class GameWorld extends World {
    protected height: number = 5000;
    protected width: number = 3000;
    private player: KeyboardPlayer;

    protected init (): void {
        this.player = new KeyboardPlayer();
        this.camera = new Camera(400, 400);
        this.camera.follow(this.player);
        this.addSprite(this.player);
    }

    protected fillBackground(): void {
        if (typeof this.backgroundImage !== 'undefined') {
            this.getContext().drawImage(
                this.backgroundImage, this.camera.getX(), this.camera.getY(), this.width, this.height,
                0, 0, this.width, this.height
            );
        } else {
            var ctx = this.getContext();
            const originalWidth = ctx.canvas.width;
            const originalHeight = ctx.canvas.height;
            ctx.canvas.width = this.width;
            ctx.canvas.height = this.height;
            var rows = ~~(this.width / 44) + 1;
            var columns = ~~(this.height / 44) + 1;

            var color = "red";
            ctx.save();
            ctx.fillStyle = "red";
            for (var x = 0, i = 0; i < rows; x += 44, i++) {
                ctx.beginPath();
                for (var y = 0, j = 0; j < columns; y += 44, j++) {
                    ctx.rect(x, y, 40, 40);
                }
                color = (color == "red" ? "blue" : "red");
                ctx.fillStyle = color;
                ctx.fill();
                ctx.closePath();
            }
            ctx.restore();

            this.backgroundImage = new Image();
            this.backgroundImage.src = this.getContext().canvas.toDataURL('image/png');

            ctx.canvas.width = originalWidth;
            ctx.canvas.height = originalHeight;
        }
    }
}

export default GameWorld;
