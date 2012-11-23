var jogador = {
   x: 600,
   y: 300,
   angulo: -90,
   vang: 0,      
   aceleracao: 0,
   vx: 0,
   vy: 0,
   raio: 15,
   quadro: 0,
   desenhar: function (ctx){
      ctx.save();
      ctx.translate(jogador.x, jogador.y);
      ctx.save();
      ctx.rotate(jogador.angulo * 2 * Math.PI / 360);         
      ctx.drawImage(naveImg, 64*Math.floor(jogador.quadro), 33, 64, 47,
            -jogador.raio, -jogador.raio, jogador.raio*2, jogador.raio*2);
      
      
      if(true || desenhaLimites){
         ctx.beginPath( );
         ctx.moveTo(0, -10);
         ctx.lineTo(8, 10);
         ctx.lineTo(-8, 10);
         ctx.lineTo(0, -10);
         ctx.closePath( );
         ctx.stroke();

         ctx.beginPath( );
         ctx.arc(0,0,jogador.raio,0,Math.PI * 2,true);
         ctx.closePath( );
         ctx.strokeStyle= "yellow";
         ctx.stroke();
      
       
         ctx.beginPath();
         ctx.moveTo(0,0);
         ctx.lineTo(0, -100);
         ctx.closePath( );
         ctx.strokeStyle= "white";
         ctx.stroke();

      }
      ctx.restore();

        ctx.beginPath();
         ctx.moveTo(0,0);
         ctx.lineTo(50*this.vx, 0);
         ctx.closePath( );
         ctx.strokeStyle= "green";
         ctx.stroke();

         ctx.beginPath();
         ctx.moveTo(0,0);
         ctx.lineTo(0, -50*this.vy);
         ctx.closePath( );
         ctx.strokeStyle= "red";
         ctx.stroke();

         ctx.restore();
   },

   mover: function () {
      this.angulo += this.vang * dt;
      this.x += this.vx;
      this.y -= this.vy;

      var r = Math.sqrt(Math.pow(this.x - buracoNegro.x,2)+             Math.pow(this.y - buracoNegro.y,2));
      var atx = -50 * (this.x - buracoNegro.x)/(r*r);
      var aty =  50 * (this.y - buracoNegro.y)/(r*r);
      this.vx += this.aceleracao*Math.sin(this.angulo * 2 * Math.PI / 360)*dt + atx * dt;
      this.vy += this.aceleracao*Math.cos(this.angulo * 2 * Math.PI / 360)*dt + aty * dt;

      if(this.y<-20) {
         this.y = 500;
      }
      if(this.y>500) {
         this.y = -20;
      }
      if(this.x< -this.raio) {
         boom.x = this.x + 2*this.raio;
         boom.y = this.y;
         boom.frame = 0;
         boom.framel = 0;           
         this.inicia();
      }
      if(this.x>640 - this.raio) {
         this.x = 640 - this.raio;
      }
      
   },

   inicia: function() {
      this.x = 600;
      this.y = 300;
      this.angulo = -90;
      this.aceleracao = 0;
      this.vx = 0;
      this.vy = 0;
   },

   direcao: function(objeto) {
      var x1 = Math.sin((this.angulo + 90)* 2 * Math.PI / 360);
      var y1 = Math.cos((this.angulo + 90)* 2 * Math.PI / 360);
      var x2 = this.x - objeto.x;
      var y2 = this.y - objeto.y;
      var p = x1 * x2 + y1 * y2;
      return p;



   }
};
