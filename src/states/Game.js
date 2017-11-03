/* globals __DEV__ */
import Phaser from 'phaser';
import Mushroom from '../sprites/Mushroom';
import Rectangle from '../sprites/Rectangle';

function generateRoom(game) {
  const drawnObject = game.add.sprite(game.world.centerX, game.world.centerY, Rectangle);
  drawnObject.anchor.setTo(0.5, 0.5);
  return 'hello world';
}

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Welcome To The Night Train';
    const banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText);
    banner.font = 'Bangers';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);

    generateRoom(this.game);

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    });

    this.game.add.existing(this.mushroom);
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32);
    }
  }
}
