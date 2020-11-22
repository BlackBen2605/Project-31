class Plinko{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.circle(x,y,10, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var plinkopos=this.body.position;		

			push()
			translate(plinkopos.x, plinkopos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			ellipse(0,0,10,10 );
			pop()
			
	}

}