function BuracoNegro(){
         this.angulo = 0;
         this.x = 40;
         this.y = 250;
         this.raio = 15;
         this.quadro = 0;
         this.vang = 20;

         this.colisao = function(alvo) {
            var d = Math.sqrt(Math.pow((this.x-alvo.x),2) + Math.pow((this.y-alvo.y),2));
            return d < (this.raio+alvo.raio); 
         };

         this.desenhar = function(ctx) {

            this.angulo += this.vang * dt;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angulo * 2 * Math.PI / 360);
            ctx.drawImage(buracoNegroImg, -150,-150,300,300);
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

     
