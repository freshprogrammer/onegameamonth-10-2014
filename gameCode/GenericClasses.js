//functions
function getMousePos(canvas, evt) 
{
	var rect = canvas.getBoundingClientRect();
	return {
	  X: evt.clientX - rect.left,
	  Y: evt.clientY - rect.top
	};
}
//classes
//Point
function Point(x, y) {
    this.X = x;
    this.Y = y;
}
Point.prototype.toString=function()
{
	return '[Point('+this.X+','+this.Y+')]';
};
//GameInput
function GameInput()
{
	this.reset();
}
GameInput.prototype.reset=function()
{
	this.clearKeys();
};
GameInput.prototype.clearKeys=function()
{
	this.UpPressed = false;
	this.DownPressed = false;
	this.LeftPressed = false;
	this.RightPressed = false;
	this.EnterPressed = false;
	this.PausePressed = false;
};
GameInput.prototype.toString=function()
{
	var result = "";
	if(this.UpPressed)   result+="Up,";
	if(this.DownPressed) result+="Down,";
	if(this.LeftPressed) result+="Left,";
	if(this.RightPressed)result+="Right,";
	if(this.EnterPressed)result+="Enter,";
	if(this.PausePressed)result+="Pause,";
	
	return result;
};