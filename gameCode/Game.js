var canvasID = "myCanvas";
var canvas;
var rootTimer;
var mousePos = new Point(0,0);
var tickDelay = 0;
var gameWidth;
var gameHeight;

var keysPressed = [];
var gameInput = new GameInput();

var demoX = 1;
var demoRight = true;

var player;

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
	var index = keysPressed.indexOf(event.keyCode);
	
	if (index <= -1) {
		keysPressed.push(event.keyCode);
	}
}
function keyUp(event)
{
	var index = keysPressed.indexOf(event.keyCode);
	
	if (index > -1) {
		keysPressed.splice(index, 1);
	}
	//console.log("keyUp");
}
function processInput()
{
	gameInput.clearKeys();
	for	(index = 0; index < keysPressed.length; index++) 
	{   
		if(keysPressed[index]==87 || keysPressed[index]==38)//w and up
			gameInput.UpPressed = true;
		else if(keysPressed[index]==83 || keysPressed[index]==40)//s and down
			gameInput.DownPressed = true;
		else if(keysPressed[index]==68 || keysPressed[index]==39)//d and right
			gameInput.RightPressed = true;
		else if(keysPressed[index]==65 || keysPressed[index]==37)//a and left
			gameInput.LeftPressed = true;
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
	processInput();
	player.update(0);
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

	context.fillText("Keys:"+keysPressed,           xPos,yPos+ySeperation*2);
	context.fillText("Input:"+gameInput,           xPos,yPos+ySeperation*3);
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