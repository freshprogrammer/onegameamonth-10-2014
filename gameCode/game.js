var rootTimer;
var mousePos = new Point(0,0);
var tickDelay = 5;
var gameWidth;
var gameHeight;

var demoX = 1;
var demoRight = true;

function gameInit()
{	
	var canvas = document.getElementById("myCanvas");
	gameWidth = canvas.width;
	gameHeight = canvas.height;
	
	
	canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvas, evt);}, false);
	
	gameStart();
}
function gameStart()
{
	tick();
	rootTimer = setInterval(function(){tick()}, tickDelay);
}
function gameStop()
{
    clearInterval(myVar);
}

function demo(ctx)
{
	if(demoRight)
		demoX++;
	else	
		demoX--;
		
	if(demoX == gameWidth)
		demoRight = false;
	else if(demoX == 1)
		demoRight = true;
	
	if(demoRight)
		demoX++;
	else	
		demoX--;
		
	if(demoX == gameWidth)
		demoRight = false;
	else if(demoX == 1)
		demoRight = true;

	var gWidth=50;
	// Create gradient
	var grd = ctx.createLinearGradient(demoX+gameWidth/2,0,demoX+gWidth/2,demoX);
	grd.addColorStop(0,"cyan");
	grd.addColorStop(1,"red");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0,0,gameWidth,gameHeight);
	
	
	var d = new Date();
	ctx.font = '40pt Calibri';
	ctx.fillStyle = 'black';
	ctx.fillText("Date:"+d.toUTCString()+" - "+d.getMilliseconds(),10,90);
	ctx.fillText("Mouse X:"+mousePos.X+" Y:"+mousePos.Y,10,190);
	ctx.fillText("Gradient X:"+demoX,10,290);
}

function tick()
{
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	ctx.clearRect (0,0,gameWidth,gameHeight);
	
	demo(ctx);
}