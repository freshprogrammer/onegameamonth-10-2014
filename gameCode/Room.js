Room.prototype = new GameObject();        // Here's where the inheritance occurs 
Room.prototype.constructor=Room;  
function Room(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;

	this.collisionEnabled = true;
}

Room.prototype.update=function(time)
{
	var singleDoorSize = 75;
	var wallThickness = 5;

	var remainingWallWidth = (this.Width-singleDoorSize)/2;
	var remainingWallHeight = (this.Height-singleDoorSize)/2;
	
	if(this.collisionEnabled)
	{
		//collisionSystem.add(this);
		/*
		collisionSystem.add(new CollisionRectangle(           this.X,			 this.Y,wallThickness,  this.Height,this));//left
		collisionSystem.add(new CollisionRectangle(this.X+this.Width,			 this.Y,wallThickness,  this.Height,this));//right
		collisionSystem.add(new CollisionRectangle(        	  this.X,	         this.Y,   this.Width,wallThickness,this));//top
		collisionSystem.add(new CollisionRectangle(           this.X,this.Y+this.Height,   this.Width,wallThickness,this));//bottom
		*/

		collisionSystem.add(new CollisionRectangle(this.X,			 this.Y,                                   wallThickness,remainingWallHeight,this));//left top
		collisionSystem.add(new CollisionRectangle(this.X,           this.Y+remainingWallHeight+singleDoorSize,wallThickness,remainingWallHeight,this));//left bottom

		collisionSystem.add(new CollisionRectangle(this.X+this.Width,this.Y,                                   wallThickness,remainingWallHeight,this));//left top
		collisionSystem.add(new CollisionRectangle(this.X+this.Width,this.Y+remainingWallHeight+singleDoorSize,wallThickness,remainingWallHeight,this));//left bottom
		
		

		collisionSystem.add(new CollisionRectangle(this.X,	                                this.Y,            remainingWallWidth,wallThickness,this));//top left
		collisionSystem.add(new CollisionRectangle(this.X+remainingWallWidth+singleDoorSize,this.Y,            remainingWallWidth,wallThickness,this));//top right

		collisionSystem.add(new CollisionRectangle(this.X,                                  this.Y+this.Height,remainingWallWidth,wallThickness,this));//bottom left
		collisionSystem.add(new CollisionRectangle(this.X+remainingWallWidth+singleDoorSize,this.Y+this.Height,remainingWallWidth,wallThickness,this));//bottom right
	}
};

Room.prototype.draw=function(context)
{
	context.strokeStyle = 'red';
	context.strokeRect(this.X,this.Y,this.Width,this.Height);
};

Room.prototype.toString=function()
{
	return '[Room ('+this.X+','+this.Y+','+this.Width+','+this.Height+')]';
};