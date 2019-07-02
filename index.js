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

let goku = new Image();
goku.src = "assets/pictures/GokuSuperSaiyan.png";
let gokuWidth = 720; 
let gokuHeight = 220; 
let gokuRows = 1; 
let gokuCols = 6; 
let gWidth = gokuWidth/gokuCols;  
let gHeight = gokuHeight/gokuRows; 
let gokuCurFrame = 0; 
let gokuFrameCount = 6; 
let gokuX=200;
let gokuY=370; 
let gokuSrcX= 0; 
let gokuSrcY= 510;

let ctx = canvas.getContext("2d");


function updateFrame(){
    gokuCurFrame = ++gokuCurFrame % gokuFrameCount;
    gokuSrcX = gokuCurFrame * gWidth;
    ctx.clearRect(gokuX,gokuY,gWidth,gHeight);
    
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
        ctx.drawImage(goku,gokuSrcX,gokuSrcY,gokuWidth,gokuHeight,gokuX,gokuY,gokuWidth,gokuHeight);
    }

    setInterval(draw, 80);
