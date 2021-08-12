class rope {
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {
        bodyA : body1,
        bodyB : body2,
        pointB : {x : this.offSetX, y : this.offSetY}
        }

        //this.x = x;
        //this.y = y;
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(2);
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x + this.offSetX;
        var anchor2y = pointB.y + this.offSetY;
        line(anchor1x , anchor1y , anchor2x , anchor2y);
    }
}