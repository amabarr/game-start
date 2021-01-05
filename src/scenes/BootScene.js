import {Scene} from 'phaser';

class BootScene extends Scene {
  constructor() {
    super("scene-boot");
  }

  preload(){
    //preloading background stuff
    this.load.image('background', 'assets/environment/background.png')
    this.load.image('columns', 'assets/environment/columns.png')

     // load tiled map
    this.load.image('tiles', 'assets/environment/tileset.png', {
      frameWidth: 16,
      frameHeight: 16
    })
    this.load.tilemapTiledJSON("map", "assets/map/test.json");



    // atlas
    this.load.atlas("atlas", 'assets/atlas/atlas.png', "assets/atlas/atlas.json" );

    //preloading enter + title
    this.load.image("title", "assets/images/title-screen.png");
    this.load.image("credits", "assets/images/credits-text.png");
    this.load.image("enter", "assets/images/press-enter-text.png");
    this.load.image("instructions", "assets/images/instructions.png");
    this.load.image("gameover", "assets/images/game-over.png");

    //music
    this.load.audio("levelOneMusic", "assets/audio/ThemeSong.mp3")
  }

  create() {
    this.scene.start("titleScreen");
  }

}

export default BootScene;
