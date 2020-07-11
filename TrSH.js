class TrSH{
    constructor(){
        var options={
            restitution:0.5,
            friction:0.04,
            density:0.01
        }
        this.trash= Bodies.circle(100,600,20,options);
        World.add(world,this.trash); 
    }
    display(){
      var P05=this.trash.position;
      var angle=this.trash.angle;
      translate (P05.x,P05.y);
      rotate(angle);
      circle(0,0,20);
    }
 }