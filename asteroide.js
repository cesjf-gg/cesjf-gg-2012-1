function Asteroide(){
         this.x = 200;          
         this.y = 0;
         this.ax = 0;
         this.ay = 0;
         this.vx = 0;
         this.vy = 0;
         this.raio = 30;
         this.colidido = false;
         this.preso = false;
         this.quadro = 0;
         this.animacao = 10;
         this.desenhar = function(ctx){
            ctx.save();
         
            ctx.translate(this.x, this.y);
            if(this.preso){
               ctx.save();
               ctx.rotate((jogador.angulo+90) * GRAD_TO_RAD);         
            }
            ctx.drawImage(asteroidImg, Math.floor(this.quadro)*128, 0, 128, 128,
                      -this.raio, -this.raio, 2*this.raio, 2*this.raio);
            if(this.preso){
               ctx.restore();
            }
            
            if(!this.preso){
               this.quadro += this.animacao*dt;
            }
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
         this.mover = function() {
            var r = Math.sqrt(Math.pow(this.x - buracoNegro.x,2)+             Math.pow(this.y - buracoNegro.y,2));
            this.ax = -1000 * (this.x - buracoNegro.x)/(r*r);
            this.ay = - 1000 * (this.y - buracoNegro.y)/(r*r);
            this.vx += this.ax*dt;
            this.vy += this.ay*dt;
            this.x += this.vx*dt;
            this.y += this.vy*dt;

            /*if(this.y<-20) {
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
            }*/
         };

         this.colisao = function(alvo) {
            var d = Math.sqrt(Math.pow((this.x-alvo.x),2) + Math.pow((this.y-alvo.y),2));
            return d < (this.raio+alvo.raio); 
         };

         this.inicia = function(i) {
            this.ax = 0;
            this.ay = 0;
            this.vx = Math.random()*50 - 25;
                        
            this.x = 100 + Math.random()*400;
            if (i%2==0){
               this.vy = Math.random()*50; 
               this.y = 0 - Math.random()*1;
            }
            else{
               this.vy = - Math.random()*50;
               this.y  = 480 + Math.random()*1;
            }
            this.quadro = Math.random()*128;
            this.animacao = Math.random()*10+10;
         };

      };
      
