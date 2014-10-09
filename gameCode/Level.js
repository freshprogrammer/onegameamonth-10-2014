Level.prototype = new GameObject();        // Here's where the inheritance occurs 
Level.prototype.constructor=Level;  
function Level()
{
	
}

Level.prototype.create=function()
{
	var room = new Room(100,200,200,300);
	this.Children.push(room);
	var room = new Room(300,150,400,500);
	this.Children.push(room);
};

Level.prototype.update=function(time)
{
	for	(index = 0; index < this.Children.length; index++) 
	{
		//array of rooms in this level
		this.Children[index].update(time);
	}
};

Level.prototype.draw=function(context)
{
	for	(index = 0; index < this.Children.length; index++) 
	{
		//array of rooms in this level
		this.Children[index].draw(context);
	}
};

Level.prototype.toString=function()
{
	return '[Level]';
};