    class TrSHCAN{
       constructor(){
         this.rect1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
         World.add(world,this.rect1);
	     this.rect2 = Bodies.rectangle(300,620,20,100,{isStatic:true});
	     World.add(world,this.rect2);
         this.rect3 = Bodies.rectangle(500,620,20,100,{isStatic:true});
         World.add(world,this.rect3);
       }
       display(){
         var POS_1=this.rect1.position;
         var POS_2=this.rect2.position;
         var POS_3=this.rect3.position;
         rect(POS_1.x,POS_1.y,200,20);
         rect(POS_2.x,POS_2.y,20,100);
         rect(POS_3.x,POS_3.y,20,100);
       }
    }