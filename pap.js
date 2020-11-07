class pap
{
    constructor(x,y,r)
    {
     var thrown ={
         'isStatic':false,
         'restitution':0.3,
         'density':1.2,
         'friction':0.5
     }
     this.body=bod.circle(x,y,r,thrown)
     this.r=r;
     this.image=loadImage("paper.png");
     
     wor.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }   
}