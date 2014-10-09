Room.prototype = new GameObject();        // Here's where the inheritance occurs 
Room.prototype.constructor=Room;  
function Room(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;
}

Room.prototype.update=function(time)
{
	
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