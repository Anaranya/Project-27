class bob {
    constructor(x,y,r){
        var options = {isStatic : false,
            friction : 0.0,
            restituition : 1.0,
            density : 0.8
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        //this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world, this.body)
    }
    display(){
        var paperPos = this.body.position;
        push()
        translate(paperPos.x , paperPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,0,0);
        ellipse(0,0,this.r, this.r);
        //imageMode(CENTER);
       // image(this.image,0,0,this.r,this.r);
        pop()
    }
}