export default (game, w, h, c) => {
  const genSprite = game.add.bitmapData(w, h);
  genSprite.ctx.beginPath();
  genSprite.ctx.rect(0, 0, w, h);
  genSprite.ctx.fillStyle = c;
  genSprite.ctx.fill();
  return genSprite;
};
