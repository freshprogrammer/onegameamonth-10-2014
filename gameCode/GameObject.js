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

GameObject.prototype.createCollisionObjectWithPadding=function(padding)
{
	return new CollisionRectangle(this.X-padding,this.Y-padding,this.Width+padding*2,this.Height+padding*2,this);
};

GameObject.prototype.toString=function()
{
	return '[GameObject at ('+this.X+','+this.Y+')]';
};
GameObject.prototype.toString=function()
{
	return '[GameObject at ('+this.X+','+this.Y+')]';
};
