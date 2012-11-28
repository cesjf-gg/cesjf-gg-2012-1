var jogador = {
   x: 600,
   y: 300,
   angulo: 180,
   vang: 0,      
   aceleracao: 0,
   vx: 0,
   vy: 0,
   raio: 15,
   quadro: 0,
   asteroide: null,
   desenhar: function (ctx){
      ctx.save();
      ctx.translate(jogador.x, jogador.y);
      ctx.save();
      ctx.rotate((jogador.angulo+90) * GRAD_TO_RAD);         
      ctx.drawImage(naveImg, 64*Math.floor(jogador.quadro), 33, 64, 47,
            -jogador.raio, -jogador.raio, jogador.raio*2, jogador.raio*2);
      
      if(desenhaLimites){
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

      }
      ctx.restore();


         ctx.restore();
   },

   mover: function () {
      this.angulo += this.vang * dt;
      this.x += this.vx;
      this.y -= this.vy;

      var r = Math.sqrt(Math.pow(this.x - buracoNegro.x,2)+             Math.pow(this.y - buracoNegro.y,2));
      var atx = -50 * (this.x - buracoNegro.x)/(r*r);
      var aty =  50 * (this.y - buracoNegro.y)/(r*r);
      this.vx += this.aceleracao*Math.cos(this.angulo * GRAD_TO_RAD)*dt + atx * dt;
      this.vy -= this.aceleracao*Math.sin(this.angulo * GRAD_TO_RAD)*dt - aty * dt;

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
      if(this.asteroide){
         this.asteroide.x = this.x+1.0*(this.raio+this.asteroide.raio)*Math.cos(this.angulo * GRAD_TO_RAD);
         this.asteroide.y = this.y+1.0*(this.raio+this.asteroide.raio)*Math.sin(this.angulo * GRAD_TO_RAD);
         
      }
      
   },

   inicia: function() {
      this.solta();
      this.x = 600;
      this.y = 300;
      this.angulo = -90;
      this.aceleracao = 0;
      this.vx = 0;
      this.vy = 0;
      
   },
   solta: function(){
      if(this.asteroide){
         this.asteroide.vx = this.vx * 1.1/dt;
         this.asteroide.vy = -this.vy * 1.1/dt;
         this.asteroide.preso = false;
         this.asteroide = null;
      }
   },

   direcao: function(objeto) {
      var x1 = Math.cos((this.angulo)* GRAD_TO_RAD);
      var y1 = Math.sin((this.angulo)* GRAD_TO_RAD);
      var x2 = objeto.x - this.x;
      var y2 = objeto.y - this.y;
      var n2 = Math.sqrt(x2*x2+y2*y2);
      var p = x1 * x2/n2 + y1 * y2/n2;
      return p;



   }
};
