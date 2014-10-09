function GameObject()
{
	this.X = 0;
	this.Y = 0;
	this.Width = 0;
	this.Height = 0;
	this.VectorX = 0;
	this.VectorY = 0;
	this.Children=[];
}

GameObject.prototype.update=function(time)
{
	
};

GameObject.prototype.toString=function()
{
	return '[GameObject at ('+this.X+','+this.Y+')]';
};
