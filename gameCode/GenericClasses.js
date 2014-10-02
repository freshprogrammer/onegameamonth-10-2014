function Point(x, y) {
    this.X = x;
    this.Y = y;
}

function getMousePos(canvas, evt) 
{
	var rect = canvas.getBoundingClientRect();
	return {
	  X: evt.clientX - rect.left,
	  Y: evt.clientY - rect.top
	};
}