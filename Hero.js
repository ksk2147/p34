class Hero {
  constructor(x,y, width, height)
	{
		var options = { 
			isStatic: false,
			restituition: 0,
			friction: 1,
			density: 1.2
		};
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		this.image=loadImage("images/superhero1.png");
		World.add(world, this.body);
	}
	display()
	{
			
			var angle = this.body.angle;
			var pos= this.body.pos;	
			push()
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0, this.width, this.height)
			pop()
			
	}
}
