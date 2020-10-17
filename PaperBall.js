class PaperBall {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius=50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);

      fill("purple");
      circle(0, 0,this.radius);
      pop();
    }
  };