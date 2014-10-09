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
	console.log(this.FrameCollisionObjects.length+" collision Objects");
	for	(index = 0; index < this.FrameCollisionObjects.length; index++) 
	{
		//test collision
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


//Collision Rectangle
CollisionRectangle.prototype = new GameObject();        // Here's where the inheritance occurs 
CollisionRectangle.prototype.constructor=CollisionSystem;  
function CollisionRectangle(x,y,w,h, parent)
{
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