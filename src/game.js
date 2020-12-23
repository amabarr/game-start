import './main.css';
import Phaser, {Game} from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScreen from './scenes/TitleScreen';

const canvas = document.getElementById('game-canvas');
const config = {
  type: Phaser.WEB_GL, //why this exactly
  width: 1000,
  height: 600,
  canvas,
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
