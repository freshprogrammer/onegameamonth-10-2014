Level.prototype = new GameObject();        // Here's where the inheritance occurs 
Level.prototype.constructor=Level;  
function Level()
{
	
}

Level.prototype.update=function(time)
{
	
};

Level.prototype.draw=function(context)
{
	
};

Level.prototype.toString=function()
{
	return '[Level]';
};