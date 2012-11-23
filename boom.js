var boom = {
   x: 100,
   y: 100,
   w: 0,
   h: 0,
   frame: 0,
   framel: 0,

   desenhar: function(ctx) {
      this.frame++;
      if(this.frame>3) {
         this.frame = 0;
         this.framel++;
      }
      if(this.framel>3) {
         this.framel = 0;
         this.x = -1000;
         this.y = -1000;
      }

      ctx.save();
      ctx.translate(this.x, this.y);
      //ctx.rotate(a*2*Math.PI/360);
      ctx.drawImage(imagemBoom,this.frame*64,this.framel*64,64, 64,-32,-32, 64, 64);
      ctx.restore();
   }
};
