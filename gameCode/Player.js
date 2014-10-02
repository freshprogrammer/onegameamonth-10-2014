Player.image;

Player.prototype = new GameObject();        // Here's where the inheritance occurs 
Player.prototype.constructor=Player;  
function Player()
{
	
}

Player.prototype.update=function(time)
{
	
}

Player.prototype.draw=function(context)
{
	context.drawImage(Player.image, this.X, this.Y);
}

Player.prototype.toString=function()
{
	return '[GameObject "'+this.name+'"]';
}