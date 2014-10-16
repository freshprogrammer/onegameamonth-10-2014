CollisionSystem.prototype.constructor=CollisionSystem;  
function CollisionSystem()
{
	this.FrameCollisionObjects=[];
}

CollisionSystem.prototype.clearFrame=function()
{
	this.FrameCollisionObjects = [];//clear array
};

CollisionSystem.prototype.update=function(time)
{
	//console.log(this.FrameCollisionObjects.length+" collision Objects");
	for	(index = 0; index < this.FrameCollisionObjects.length; index++) 
	{
		//test collision
		for	(index2 = index+1; index2 < this.FrameCollisionObjects.length; index2++) 
		{
			//test collision
			var co1 = this.FrameCollisionObjects[index];
			var co2 = this.FrameCollisionObjects[index2];

			//var co1 = new CollisionRectangle(); var co2 = new CollisionRectangle();
			//co1.Parent = new GameObject();
			if(!co1.Parent.FixedLocation || !co2.Parent.FixedLocation)
			{
				//not both fixed so possible collision
				if(CollisionSystem.testCollision(co1, co2))
				{
					playBeepData();
					//hack - just reverse movement for this frame
					if(!co1.Parent.FixedLocation)
						co1.Parent.moveToDelta(-co1.Parent.VectorX,-co1.Parent.VectorY);
					if(!co2.Parent.FixedLocation)
						co2.Parent.moveToDelta(-co2.Parent.VectorX,-co2.Parent.VectorY);
				}
			}
		}
	}
};

CollisionSystem.prototype.add=function(o)
{
	if(o instanceof CollisionRectangle)
	{
		this.FrameCollisionObjects.push(o);
	}
	else if(o instanceof Room)
	{
		this.FrameCollisionObjects.push(new CollisionRectangle(        o.X,			 o.Y,	   1,o.Height,o));//left
		this.FrameCollisionObjects.push(new CollisionRectangle(o.X+o.Width,			 o.Y,	   1,o.Height,o));//right
		this.FrameCollisionObjects.push(new CollisionRectangle(        o.X,	         o.Y,o.Width,       1,o));//top
		this.FrameCollisionObjects.push(new CollisionRectangle(        o.X,	o.Y+o.Height,o.Width,       1,o));//bottom
	}
	else if(o instanceof GameObject)
	{
		this.FrameCollisionObjects.push(o.createCollisionObject());
	}
	
	//re sort by elem.X ASC
	this.FrameCollisionObjects.sort(function(a,b) { return a.X-b.X;});
};

CollisionSystem.prototype.draw=function(context)
{
	for	(index = 0; index < this.FrameCollisionObjects.length; index++) 
	{
		//array of rooms in this CollisionSystem
		this.FrameCollisionObjects[index].draw(context);
	}
};

CollisionSystem.prototype.toString=function()
{
	return '[CollisionSystem]';
};

CollisionSystem.testCollision=function(co1, co2)
{
	/*
	var co1 = new CollisionRectangle();
	var co2 = new CollisionRectangle();
	*/
	
	/*
	//returns true if there is a collision
	var collision = false;
	var co1Xinco2 = ((co1.X > co2.X && co1.X < co2.Right) || (co1.Right > co2.X && co1.Right < co2.Right));
	var co2Xinco1 = ((co2.X > co1.X && co2.X < co1.Right) || (co2.Right > co1.X && co2.Right < co1.Right));
	var co1Yinco2 = ((co1.Y > co2.Y && co1.Y < co2.Bottom) || (co1.Bottom > co2.Y && co1.Bottom < co2.Bottom));
	var co2Yinco1 = ((co2.Y > co1.Y && co2.Y < co1.Bottom) || (co2.Bottom > co1.Y && co2.Bottom < co1.Bottom));

	var co1inco2 = (co1Xinco2 && co1Yinco2);
	var co2inco1 = (co2Xinco1 && co2Yinco1);
	
	if(co1inco2 || co2inco1)
	{
		collision = true;
	}*/
	
	if(co1 instanceof CollisionRectangle && co2 instanceof CollisionRectangle)
	{
		collision = CollisionSystem.testCollisionAABB(co1,co2); 
	}
	return collision;
};

CollisionSystem.testCollisionAABB=function(co1, co2)
{// axis aligned bounding box
	//https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
	
	//this does not catch skipping over 
	
	/*
	var co1 = new CollisionRectangle();
	var co2 = new CollisionRectangle();
	*/
	
	//returns true if there is a collision
	var collision = co1.X < co2.Right && 
					co1.Right > co2.X &&
					co2.Y < co1.Bottom && 
					co2.Bottom > co1.Y;
					
	return collision;
};


//Collision Rectangle
CollisionRectangle.prototype = new GameObject();        // Here's where the inheritance occurs 
CollisionRectangle.prototype.constructor=CollisionSystem;  
function CollisionRectangle(x,y,w,h, parent)
{
	this.Parent = parent;
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;
	this.Right = x+w;
	this.Bottom = y+h;
}

CollisionRectangle.prototype.update=function(time)
{
	
};

CollisionRectangle.prototype.draw=function(context)
{
	context.globalAlpha=0.5;
	context.fillStyle = 'lime';
	context.fillRect(this.X,this.Y,this.Width,this.Height);
	context.strokeStyle = 'green';
	context.strokeRect(this.X,this.Y,this.Width,this.Height);
	context.globalAlpha=1;
};

CollisionRectangle.prototype.toString=function()
{
	return '[CollisionRectangle ('+this.X+','+this.Y+','+this.Width+','+this.Height+')]';
};