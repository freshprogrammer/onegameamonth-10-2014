function GameObject()
{
	this.X = 0;
	this.Y = 0;
	this.Width = 0;
	this.Height = 0;
	this.VectorX = 0;
	this.VectorY = 0;
}

GameObject.prototype.update=function(time)
{
	
};

GameObject.prototype.createCollisionObject=function()
{
	return new CollisionRectangle(this.X,this.Y,this.Width,this.Height,this);
};

GameObject.prototype.toString=function()
{
	return '[GameObject at ('+this.X+','+this.Y+')]';
};
