function GameInit()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// Create gradient
	var grd = ctx.createLinearGradient(0,0,1024,0);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"blue");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0,0,5000,5000);
}