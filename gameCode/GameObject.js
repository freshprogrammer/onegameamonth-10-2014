function GameObject()
{
	this.X = 0;
	this.Y = 0;
	this.Width = 0;
	this.Height = 0;
	this.children=[];
}

GameObject.prototype.update=function(time)
{
	
};

GameObject.prototype.toString=function()
{
	return '[GameObject "'+this.name+'"]';
};
