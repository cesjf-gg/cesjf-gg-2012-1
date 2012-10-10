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
            ctx.rotate(jogador.angulo * 2 * Math.PI / 360);         
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
            }
            ctx.restore();
         },

         mover: function (){
            this.angulo += this.vang * dt;
            this.x += this.vx;
            this.y -= this.vy;

            var r = Math.sqrt(Math.pow(this.x - buracoNegro.x,2)+             Math.pow(this.y - buracoNegro.y,2));
            var atx = -100 * (this.x - buracoNegro.x)/(r*r);
            var aty =  100 * (this.y - buracoNegro.y)/(r*r);
            this.vx += this.aceleracao*Math.sin(this.angulo * 2 * Math.PI / 360)*dt + atx * dt;
            this.vy += this.aceleracao*Math.cos(this.angulo * 2 * Math.PI / 360)*dt + aty * dt;

            if(this.y<-20) {
               this.y = 500;
            }
            if(this.y>500) {
               this.y = -20;
            }
            if(this.x<-20) {
               this.x = 660;
            }
            if(this.x>660) {
               this.x = -20;
            }
            
         },
      };
