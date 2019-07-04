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

let levelKi = 30;
let life = 100;

//Mise en place posInit après intro au combat
setTimeout(posInitRightGoku, 1750)

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
    
    if (keyState[87] && gokuY>0){
        gokuY-=3
        if(gokuY===270){
            posInitRightGoku()
        }
        if(gokuY<270){
            posFlightRightGoku()
        }
    }
    
    if (keyState[83] && gokuY<270){
        gokuY+=3
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
    
    if(keyState[191] && levelKi>40){
        kamea();
    }
    
    if(keyState[68] && gokuX<1060){
        gokuX+=5;
        forward();
        if(keyState[190]){
            rightPunch();
        }
    }
    
    if(keyState[65] && gokuX>0){
        gokuX-=5;
        back();
        if(keyState[190]){
            rightPunch();
        }
    }

    if(keyState[88]){
        rechargeKi()
    }
    
    
    setTimeout(gameLoop, 10);
}    
gameLoop();

//FPS
let baseFps = new Date();
function draw(){
    //Fps calculs
    let diffFps = new Date();
    let fps = 1000 / (diffFps - baseFps);
    baseFps = diffFps;

    updateFrame();
    //Map
    ctx.drawImage(map,bX,bY,741,300,dX,dY,1200,800);
    //FPS
    ctx.font="20px helvetica";
    ctx.fillText(`fps: ${fps.toFixed(0)}`, 10, 20);
    //KI
    ctx.fillText(`KI: ${levelKi}/100`, 100, 20);
    //Life
    ctx.fillText(`PV: ${life} | 100`, 230, 20);
    //Characters
    ctx.drawImage(goku,gokuSrcX,gokuSrcY,gWidth,gHeight,gokuX,gokuY,gWidth*1.3,gHeight*1.3);
}

setInterval(draw, 70);

function forward(){
    gokuWidth = 110; 
    gokuHeight = 165; 
    gokuRows = 1; 
    gokuCols = 1;
    gWidth = gokuWidth/gokuCols;  
    gHeight = gokuHeight/gokuRows; 
    gokuFrameCount = 1; 
    gokuSrcY= 1320;
}

function back(){
    gokuWidth = 100; 
    gokuHeight = 165; 
    gokuRows = 1; 
    gokuCols = 1;
    gWidth = gokuWidth/gokuCols;  
    gHeight = gokuHeight/gokuRows; 
    gokuFrameCount = 1; 
    gokuSrcY= 1495;
}

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

function kamea(){
    gokuWidth = 1390; 
    gokuHeight = 165; 
    gokuRows = 1; 
    gokuCols = 7;
    gWidth = gokuWidth/gokuCols;  
    gHeight = gokuHeight/gokuRows; 
    gokuFrameCount = 7; 
    gokuSrcY= 1670;
    setTimeout(kameaFinal, 300)
}

function kameaFinal(){
    if(levelKi>0){
    levelKi-=2
}
    if(gokuY===270){
        gokuWidth = 900; 
        gokuHeight = 165; 
        gokuRows = 1; 
        gokuCols = 1;
        gWidth = gokuWidth/gokuCols;  
        gHeight = gokuHeight/gokuRows; 
        gokuFrameCount = 1; 
        gokuSrcY= 1840;
        setTimeout(posInitRightGoku, 300)
    }
    if(gokuY<270){
        gokuWidth = 900; 
        gokuHeight = 165; 
        gokuRows = 1; 
        gokuCols = 1;
        gWidth = gokuWidth/gokuCols;  
        gHeight = gokuHeight/gokuRows; 
        gokuFrameCount = 1; 
        gokuSrcY= 1840;
        setTimeout(posFlightRightGoku, 300)        
    }
}

function rechargeKi(){
    if(levelKi < 100){
    gokuWidth = 215; 
    gokuHeight = 165; 
    gokuRows = 1; 
    gokuCols = 2;
    gWidth = gokuWidth/gokuCols;  
    gHeight = gokuHeight/gokuRows; 
    gokuFrameCount = 2; 
    gokuSrcY= 2250;
    levelKi++;
    }   else {
    if(gokuY===270){posInitRightGoku()}
    if(gokuY<270){posFlightRightGoku()}  
    }
}