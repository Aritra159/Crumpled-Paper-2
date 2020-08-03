class Ball {
    constructor(x, y,radius) {
      var options = {
        restitution:0.01,
        friction:1.0,
        isStatic:true
      }
      this.body = Matter.Bodies.circle(x, y,radius, options);
      //this.width = width;
      //this.height = height;
     this.radius=radius
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      //fill(255);
      circle(0, 0,this.radius);
      pop();
    }
  };