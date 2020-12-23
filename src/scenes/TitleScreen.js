import Phaser, {Scene} from 'phaser';

class TitleScreen extends Scene {
  constructor() {
    super("titleScreen");
  }

  create() {
    this.createBackground()
    this.counter = 0
    //adding the title! Edit title later
    this.title = this.add.image(500, 300, "title")

    //hard coded width, and height. Get config into here later somehow
    //this is adding the enter image
    this.pressEnter = this.add.image(1000 / 2, 600 - 60, "enter");

    //adds instructions starts off as invisible...
    this.instructions = this.add.image(1000 / 2, 300, "instructions");
    this.instructions.visible = false;
    this.state = 1;

    //adding the enter key as an option
    this.keyEnter = this.input.keyboard.addKey("ENTER");
  }

  start(){
    this.scene.start('scene-game');
  }

  update(){
     // blink text
    if (this.counter > 15) {
      this.pressEnter.visible = true;
    } else {
      this.pressEnter.visible = false;
    }
    this.counter++;
    if (this.counter > 60) {
      this.counter = 0;
    }


    // controls
    if (Phaser.Input.Keyboard.JustDown(this.keyEnter)) {
      if (this.state === 1){
        this.state = 2;
        this.title.visible = false;
        this.instructions.visible = true;
      } else {
        this.scene.start("scene-game");
      }

    }

  }

  createBackground(){
    this.background = this.add.tileSprite(0, 0, 1000, 600, "background")
    this.background.setOrigin(0, 0)
    this.background.setScrollFactor(0)


    this.columns = this.add.tileSprite(0, 0, 1000, 600, "columns");
    this.columns.setOrigin(0, 0);
    this.columns.setScrollFactor(0);
  }
}

export default TitleScreen;
