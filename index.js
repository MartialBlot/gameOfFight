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
let gokuWidth = 2400; 
let gokuHeight = 165; 
let gokuRows = 1; 
let gokuCols = 20; 
let gWidth = gokuWidth/gokuCols;  
let gHeight = gokuHeight/gokuRows; 
let gokuCurFrame = 0; 
let gokuFrameCount = 20; 
let gokuX=200;
let gokuY=270; 
let gokuSrcX= 0; 
let gokuSrcY= 565;
//Mise en place posInit après intro au combat
setTimeout(posInitRightGoku, 2385)

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
    keyState[e.keyCode || e.which] = false;
},true);

function gameLoop() {
    
    if (keyState[87]){
        gokuY--
        if(gokuY===270){
            posInitRightGoku()
        }
        if(gokuY<270){
            posFlightRightGoku()
        }
    }
    
    if (keyState[83] && gokuY<270){
        gokuY++
        if(gokuY===270){
            posInitRightGoku()
        }
        if(gokuY<270){
            posFlightRightGoku()
        }
    }
    
    if(keyState[190]){
        rightPunch();
    }
    
    setTimeout(gameLoop, 10);
}    
gameLoop();

function draw(){
    updateFrame();
    ctx.drawImage(map,bX,bY,741,300,dX,dY,1200,800);
    ctx.drawImage(goku,gokuSrcX,gokuSrcY,gWidth,gHeight,gokuX,gokuY,gWidth*1.3,gHeight*1.3);
}

setInterval(draw, 110);

function posInitRightGoku(){
    gokuWidth = 1200; 
    gokuHeight = 165; 
    gokuRows = 1; 
    gokuCols = 10;
    gWidth = gokuWidth/gokuCols;  
    gHeight = gokuHeight/gokuRows; 
    gokuFrameCount = 10; 
    gokuSrcY= 400;
}

function posFlightRightGoku(){
    gokuWidth = 480; 
    gokuHeight = 165; 
    gokuRows = 1; 
    gokuCols = 4;
    gWidth = gokuWidth/gokuCols;  
    gHeight = gokuHeight/gokuRows; 
    gokuFrameCount = 4; 
    gokuSrcY= 940;
}

function rightPunch(){
    if(gokuY===270){
        gokuWidth = 600; 
        gokuHeight = 150; 
        gokuRows = 1; 
        gokuCols = 4;
        gWidth = gokuWidth/gokuCols;  
        gHeight = gokuHeight/gokuRows; 
        gokuFrameCount = 4; 
        gokuSrcY= 755;
        setTimeout(posInitRightGoku, 250)
    }
    if(gokuY<270){
        gokuWidth = 905; 
        gokuHeight = 180; 
        gokuRows = 1; 
        gokuCols = 7;
        gWidth = gokuWidth/gokuCols;  
        gHeight = gokuHeight/gokuRows; 
        gokuFrameCount = 7; 
        gokuSrcY= 1160;
        setTimeout(posFlightRightGoku, 500)
    }
}
