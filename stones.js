class stone{
    constructor(x,y,w,h){
        let options={
            restitution: 0.8,
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(1);
        fill("grey");
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);
        pop();
    }
}