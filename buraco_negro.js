function BuracoNegro(){
         this.angulo = 0;
         this.x = 40;
         this.y = 250;
         this.raio = 150;
         this.quadro = 0;
         this.vang = 20;

         this.desenhar = function(ctx) {

            this.angulo += this.vang * dt;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angulo * 2 * Math.PI / 360);
            ctx.drawImage(buracoNegroImg, -this.raio, -this.raio, 2*this.raio, 2*this.raio);
            this.quadro+=10*dt;
            if(this.quadro>64){
               this.quadro = 0;
            }
            if(desenhaLimites){
               ctx.beginPath( );
               ctx.arc(0,0,this.raio,0,Math.PI * 2,true);
               ctx.closePath( );
               ctx.strokeStyle= "red";
               if (this.colidido) {
                  ctx.fillStyle="red";
               } else {
                  ctx.fillStyle="yellow";
               }
               ctx.fill();
               ctx.stroke();
            }            
            ctx.restore();

         };
      };

     
