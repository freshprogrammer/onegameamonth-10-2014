var canvasID = "myCanvas";
var canvas;
var rootTimer;
var mousePos = new Point(0,0);
var tickDelay = 5;
var gameWidth;
var gameHeight;

var demoX = 1;
var demoRight = true;

var playerImg;

var player;

var inputTypes = {
	None: 0,
	Up: 1,
	Right: 2,
	Down: 3,
	Left: 4,
	Enter: 5,
	Esc: 6
};

function gameBootstrap()
{	
	canvas = document.getElementById(canvasID);
	gameWidth = canvas.width;
	gameHeight = canvas.height;
	
	loadAssets();
	
	canvas.addEventListener('mousemove', function(evt) {mouseMove(evt);}, false);
	canvas.addEventListener('mousedown', function(evt) {mouseDown(evt);}, false);
	canvas.addEventListener('mouseup',   function(evt) {mouseUp(evt);}, false);
	document.addEventListener('keydown', function(evt) {keyDown(evt);}, false);
	document.addEventListener('keyup',   function(evt) {keyUp(evt);}, false);
	
	gameStart();
}
function loadAssets()
{
	Player.image = new Image();
	Player.image.src = 'assets/pics/player/001_attackNN_01.png';
}
function mouseMove(event)
{
	mousePos = getMousePos(canvas, event);
}
function mouseDown(event)
{
	//console.log("mouseDown");
}
function mouseUp(event)
{
	//console.log("mouseUp");
}
function keyDown(event)
{
	//console.log("keyDown");
	if(event.keyCode==87 || event.keyCode==38)//w and up
		processInputCommand(inputTypes.Up);
	else if(event.keyCode==83 || event.keyCode==40)//s and down
		processInputCommand(inputTypes.Down);
	else if(event.keyCode==68 || event.keyCode==39)//up and w
		processInputCommand(inputTypes.Right);
	else if(event.keyCode==65 || event.keyCode==37)//up and w
		processInputCommand(inputTypes.Left);
}
function keyUp(event)
{
	//console.log("keyUp");
}
function processInputCommand(input)
{
	var speed = 5;
	switch(input)
	{
		case inputTypes.Up:
			player.Y-=speed;
			break;
		case inputTypes.Down:
			player.Y+=speed;
			break;
		case inputTypes.Left:
			player.X-=speed;
			break;
		case inputTypes.Right:
			player.X+=speed;
			break;
	}
}
function gameStart()
{
	//setup game for first run
	player = new Player();
	player.X = 200;
	player.Y = 500;
	
	tick();
	rootTimer = setInterval(function(){tick();}, tickDelay);
}
function gameStop()
{
    clearInterval(myVar);
}

function renderDemo(context)
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
	var grd = context.createLinearGradient(demoX+gameWidth/2,0,demoX+gWidth/2,demoX);
	grd.addColorStop(0,"cyan");
	grd.addColorStop(1,"red");

	// Fill with gradient
	context.fillStyle = grd;
	//ctx.fillRect(0,0,gameWidth,gameHeight);
	
	context.font = '40pt Calibri';
	context.fillStyle = 'black';
	context.fillText("Gradient X:"+demoX,10,90);
}

function tick()
{
	update();
	draw();
}

function update()
{
	
}

function drawFPS(context)
{
	var xPos = 5;
	var yPos = 25;
	var ySeperation = 25;
	var d = new Date();
	context.font = '20pt Calibri';
	context.fillStyle = 'black';
	
	context.fillText("Date:"+d.toUTCString()+" - "+d.getMilliseconds(),xPos,yPos+ySeperation*0);
	context.fillText("Mouse X:"+mousePos.X+" Y:"+mousePos.Y,           xPos,yPos+ySeperation*1);
}

function draw()
{
	var context = canvas.getContext("2d");
	
	context.clearRect (0,0,gameWidth,gameHeight);

	//renderDemo(context);
	drawFPS(context);
	
	//render game
	player.draw(context);
}