let canvas = document.getElementById('battleArea');
let canvasWidth = 1200; 
let canvasHeight = 600;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let map = new Image();
map.src = "assets/pictures/map.png";
let bX = 0;
let bY = 50;
let dX = 0;
let dY = 0;

let ctx = canvas.getContext("2d");


function updateFrame(){
    
}

let keyState = {};    
document.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
document.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;},true);
    
    function gameLoop() {
        
        setTimeout(gameLoop, 10);
    }    
    gameLoop();

    function draw(){
        updateFrame();
        ctx.drawImage(map,bX,bY,741,300,dX,dY,1200,800);
    }

    setInterval(draw, 80);
