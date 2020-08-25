class Balls {

    constructor(x,y,radius,options) {
        
        var options = {
            isStatic: false, restitution: 0.4, friction: 0.5, density: 1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {

        var p = this.body.position;

        push();

        fill("pink");
        ellipseMode(CENTER);
        ellipse(p.x, p.y, this.radius*2, this.radius*2);

        pop();
    }
}