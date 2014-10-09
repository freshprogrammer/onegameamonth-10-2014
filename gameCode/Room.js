Room.prototype = new GameObject();        // Here's where the inheritance occurs 
Room.prototype.constructor=Room;  
function Room()
{
	
}

Room.prototype.update=function(time)
{
	
};

Room.prototype.draw=function(context)
{
	
};

Room.prototype.toString=function()
{
	return '[Room ('+this.X+','+this.Y+','+this.Width+','+this.Height+')]';
};