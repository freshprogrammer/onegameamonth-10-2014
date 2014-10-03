Player.image;

Player.prototype = new GameObject();        // Here's where the inheritance occurs 
Player.prototype.constructor=Player;  
function Player()
{
	this.facingDir = new Point(0,0);
}

Player.prototype.update=function(time)
{
	
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

	context.save();
	context.translate(this.X+this.Width/2,this.Y+this.Height/2);//translate to center of object for rotation around center
	context.rotate(radRotation);
	
	context.drawImage(Player.image, 0, 0);
	context.restore();
};

Player.prototype.toString=function()
{
	return '[GameObject "'+this.name+'"]';
};