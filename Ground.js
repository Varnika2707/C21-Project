class Ground {
    //properties
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    //functions/methods
    display(){
        //namespacing
        var pos = this.body.position;

        fill(127)
        rectMode(CENTER);
        rect(pos.x, pos.y,this.w,this.h)

    }
}