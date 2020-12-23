import {Scene} from 'phaser';

class BootScene extends Scene {
  constructor() {
    super("scene-boot");
  }

  preload(){
    //preloading background stuff
    this.load.image('background', 'assets/Environment/background.png')
    this.load.image('columns', 'assets/Environment/columns.png')


    //preloading enter + title
    this.load.image("title", "assets/images/title-screen.png");
    this.load.image("credits", "assets/images/credits-text.png");
    this.load.image("enter", "assets/images/press-enter-text.png");
    this.load.image("instructions", "assets/images/instructions.png");
    this.load.image("gameover", "assets/images/game-over.png");


    //characters preloaded
    this.load.image('skeleton', 'assets/Skeleton/Idle.png');
    this.load.image('cat', 'assets/cat-like-creature.png')
  }

  create() {
    this.scene.start("titleScreen");
  }

}

export default BootScene;
