import './main.css';
import Phaser, {Game} from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScreen from './scenes/TitleScreen';

const config = {
  type: Phaser.WEBGL,
  width: 1000,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
    }
  },
  scene: [
    BootScene,
    GameScene,
    TitleScreen
  ]
};

const game = new Game(config);
