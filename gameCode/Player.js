Player.image;

Player.prototype = new GameObject();        // Here's where the inheritance occurs 
Player.prototype.constructor=Player;  
function Player()
{
	this.facingDir = new Point(0,0);
	this.Width = 32;
	this.Height = 32;
	this.Speed = 400;
	
	this.collisionEnabled = true;
}

Player.prototype.update=function(time)
{
	var xMove = 0;
	var yMove = 0;

	if(gameInput.DownPressed)
		yMove += this.Speed;
	if(gameInput.UpPressed)
		yMove += -this.Speed;
	if(gameInput.RightPressed)
		xMove += this.Speed;
	if(gameInput.LeftPressed)
		xMove += -this.Speed;

	xMove *= time/1000;
	yMove *= time/1000;
		
	this.move(xMove,yMove);
	
	var collisionpadding = -2;
	if(this.collisionEnabled)
		//collisionSystem.add(this);
		collisionSystem.add(this.createCollisionObjectWithPadding(collisionpadding));
};

Player.prototype.move=function(dx, dy)
{
	this.X+=dx;
	this.Y+=dy;
	this.facingDir.X = dx;
	this.facingDir.Y = dy;
};

Player.prototype.draw=function(context)
{
	var radRotation = Math.atan2(this.facingDir.Y, this.facingDir.X);
	radRotation += Math.PI/2;//rotate 90 to match original image

	//context.fillText("rotation=:"+radRotation,10,190);
	
	context.save();
	context.translate(this.X+this.Width/2,this.Y+this.Height/2);//translate to center of object for rotation around center
	context.rotate(radRotation);
	
	context.drawImage(Player.image, -this.Width/2, -this.Height/2);
	context.restore();
};

Player.prototype.toString=function()
{
	return '[Player ('+this.X+','+this.Y+')]';
};