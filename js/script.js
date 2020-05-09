
function drawIt() {
    var canvas = document.getElementById("canvas");
    var x;
    var y;
    var r = 10;
    var ctx;
    var paddlex;
    var paddleh;
    var paddlew;
    var gameprogressing = false;
    var start = false;
    var space = false;
    var pointsCounter = 0;
    var rightArrow = false;
    var leftArrow = false; 
    var hearts = 3;
    var bricks;
    var NROWS;
    var NCOLS;
    var BRICKWIDTH;
    var BRICKHEIGHT;
    var PADDING;  
    
    window.addEventListener("keydown", (event) => {
        key = event.keyCode;
        if(key == 39 && start == true){
            rightArrow = true;
        }
        if(key == 37 && start == true){
            leftArrow = true;
        }
    })
    window.addEventListener("keyup", (event) => {
        key = event.keyCode;
        if(key == 39 && start == true){
            rightArrow = false;
        }
        if(key == 37 && start == true){
            leftArrow = false;
        }
    })

    window.addEventListener("keydown", (event) => {
        key = event.keyCode;
        if(key == 32 && space == false){
            space = true; 
            start = true;
            randomStart();
            
        }
        if(key == 32 && gameprogressing == false){
            stopwatch();
            gameprogressing = true;
        }
    })
    
    
    function init() {
        
        ctx = canvas.getContext('2d');
        canvas.width = 1000;
        canvas.height = 600;
        
        return setInterval(draw, 10); 
    }
    function init_ball(){
        dy = 0;
        dx = 0;
        x = canvas.width/2 + 50;
        y = canvas.height - paddleh - 11;
    }

    function draw() {
        
        ctx.clearRect(0,0,1000,600);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);

        if(rightArrow == true && paddlex < 900){
            paddlex += 5;
        }
        if(leftArrow == true && paddlex > 0){
            paddlex -= 5;
        }
        for (i=0; i < NROWS; i++) {
            for (j=0; j < NCOLS; j++) {
                if (bricks[i][j] == 1) {
                    ctx.rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                        (i * (BRICKHEIGHT + PADDING)) + PADDING,
                        BRICKWIDTH, BRICKHEIGHT);
                }
            }
        }
        rowheight = BRICKHEIGHT + PADDING + r/2; 
        colwidth = BRICKWIDTH + PADDING + r/2;
        row = Math.floor(y/rowheight);
        col = Math.floor(x/colwidth);
        ctx.rect(paddlex, canvas.height-paddleh, paddlew, paddleh);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#2c85a3";
        ctx.beginPath();
        x += dx;
        y += dy;
        if (bricks[row] && y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
            dy = -dy; 
            bricks[row][col] = 0;
            onHitLight();
            pointsCounter ++;
            incrementPoints(pointsCounter);
        }
        if(y > canvas.height-paddleh-11 && x >= paddlex && x <= paddlex + 100){
            dy = -dy;
        }
        if(y<0){
            dy = -dy;
        }
        if(x>canvas.width){
            dx = -dx;
        }
        if(x<0){
            dx = -dx;
        }

        if(y>(canvas.height + 10)){
            dy = 0;
            dx = 0;
            x = canvas.width/2 + 50;
            y = canvas.height - paddleh - 11;
            paddlex = canvas.width / 2;
            start = false;
            space = false;
            hearts --;
            deleteHearts(hearts);
            onLostHeart();
            if(hearts == 0){
                resetAll();
            }
        
        }
        
    }
    init();
    init_paddle();
    init_ball();
    initbricks();
    displayAll();
    stopTick();
    showInfo();

    function init_paddle() {
        paddlex = canvas.width / 2;
        paddleh = 10;
        paddlew = 100;
    }
    function initbricks() {
        NROWS = 10;
        NCOLS = 5;
        BRICKWIDTH = (canvas.width/NCOLS) - 1;
        BRICKHEIGHT = 15;
        PADDING = 2;
        bricks = new Array(NROWS);
        for (i=0; i < NROWS; i++) {
          bricks[i] = new Array(NCOLS);
          for (j=0; j < NCOLS; j++) {
            bricks[i][j] = 1;
          }
        }
    }
    function randomStart(){
        var directions = [2,4,-2,4,1,5,-1,5,3,4,-3,4]
        var random = Math.floor(Math.random()*12);
        if(random%2==0){
            dx = directions[random];
            dy = directions[random + 1];
        }
        else{
            dy = directions[random]
            dx = directions[random - 1]; 
        }
        
    }
    function resetAll(){
        draw();
        init_ball();
        initbricks();
        displayAll();
        stopTick();
        showFail();
        gameprogressing = false;
        hearts = 3;
        pointsCounter = 0;
        incrementPoints(pointsCounter);
    }

    
}
