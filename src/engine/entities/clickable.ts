import Sprite from './sprite';

abstract class Clickable extends Sprite {
    abstract onClick (evt: MouseEvent): void;
}

export default Clickable;
