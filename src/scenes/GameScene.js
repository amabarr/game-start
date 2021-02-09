import Phaser, {Scene} from 'phaser'
import {Player} from '../entities/Player'

class GameScene extends Scene {

  constructor() {
    super("scene-game");
  }

  create() {
    this.createTileMap()
    this.bindKeys()

    this.music = this.sound.add("levelOneMusic", {loop: true, volume: 0.3})
    this.music.play();

    // Create a helper object for our arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // set player
    this.player = new Player(this, 16, 9 * 16);


    //camera
    this.camera = this.cameras.main
    this.camera.startFollow(this.player)
    this.camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

    //physics
    this.physics.add.collider(this.floor, this.player)
    this.input.enabled = true;
  }

  update() {
    this.playerController()
    // Listen for keyboard input
  }

  bindKeys(){
    this.keyRight = this.input.keyboard.addKey("RIGHT");
    this.keyLeft = this.input.keyboard.addKey("LEFT");
    this.keyJump = this.input.keyboard.addKey("X");
    this.keyJump2 = this.input.keyboard.addKey("UP");
    this.keyCrouch = this.input.keyboard.addKey("DOWN");
    this.keyAttack = this.input.keyboard.addKey("C");
  }


  createTileMap() {
      this.map = this.make.tilemap({
        key: "map"
      });
      const tileset = this.map.addTilesetImage('tileset', `tiles`, 16, 16);
      const background = this.map.addTilesetImage('background', 'background', 16, 16)
      const columns = this.map.addTilesetImage('columns', 'columns', 16, 16)

      const tilesets = [tileset, background, columns]

      //tilesetName, key, tileWidth, tileHeight, tile Margin, tile spacing....
      this.churchBack = this.map.createLayer('churchBack', tilesets, 0, 0)
      this.foreground = this.map.createLayer('foreground', tilesets, 0, 0)
      this.floor = this.map.createLayer('floor', tilesets, 0, 0)

      this.floor.setCollisionByProperty({collides: true})
    }


    playerController() {

      if (this.player.isAttacking || this.player.isAirAttacking ) {
        return;
      }

      if (this.keyRight.isDown) {
        this.player.moveRight();
      } else if (this.keyLeft.isDown) {
        this.player.moveLeft();
      } else {
        this.player.stopMove();
      }

      if ((this.keyJump.isDown || this.keyJump2.isDown) &&
        this.player.body.onFloor() && !this.player.isCrouching) {
        this.player.jump();
      }

      if (this.keyCrouch.isDown && this.player.body.onFloor()) {
        this.player.crouch();
      } else if (this.keyCrouch.isUp) {
        this.player.standUp();
      }


      if (Phaser.Input.Keyboard.JustDown(this.keyAttack)) {
        if(this.player.isCrouching){
            this.player.crouchAttack();
        }else if(this.player.body.onFloor()){
            this.player.attack();

        }else{
          this.player.airAttack();
        }

      }}

}

export default GameScene;
