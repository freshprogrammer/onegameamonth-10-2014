Level.prototype.constructor=Level;  
function Level()
{
	this.Rooms=[];
}

Level.prototype.create=function()
{
	var room = new Room(100,200,200,300);
	this.Rooms.push(room);
	var room = new Room(400,150,400,500);
	this.Rooms.push(room);
};

Level.prototype.update=function(time)
{
	for	(index = 0; index < this.Rooms.length; index++) 
	{
		//array of rooms in this level
		this.Rooms[index].update(time);
	}
};

Level.prototype.draw=function(context)
{
	for	(index = 0; index < this.Rooms.length; index++) 
	{
		//array of rooms in this level
		this.Rooms[index].draw(context);
	}
};

Level.prototype.createRoom=function()
{
	var maxX = 4;
	var maxY = 4;
	
	var roomXSize = Math.floor(Math.random()*maxX) + 1;
	var roomYSize = Math.floor(Math.random()*maxX) + 1;
	var totalRoomSize = roomXSize * roomYSize;
	
	var roomUnits = [];
	
	for(var xx=0; xx< totalRoomSize; xx++)
	{
		roomUnits.push(null);
	}
	
	
};

Level.prototype.toString=function()
{
	return '[Level]';
};