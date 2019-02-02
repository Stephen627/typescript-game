import Game from './app/game';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', (): void => {
    const game = new Game(
        document.getElementById('game') as HTMLCanvasElement
    );
    game.start();
})