var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(60);


//ProgramCodeGoesHere
//START OF FILE

/**
 * ECE 4525: Final Project
 * Author: Camden Thacker
 * Special & Creative Features: Most of my creative features are shown through my character
 * as he walks around the screen. He has a smooth walking motion that looks fairly
 * realistic. More features will be added as the game develops.
 * 
 * */
angleMode = "radians";

var tilemap1 = [ //LEVEL 1
        "                                                                                ",
        "                                                                                ",
        "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllbbbbbbbbbbbbbbbbbbbb",
        "                                                                                ",
        "                                                                                ",
        "                                                                               b",
        "                                b                                               ",
        "                                                                                ",
        "                                                                                ",
        "                                                                                ",
        "                                                                                ",
        "                                                                                ",
        "                                                                                ",
        "                                                 bbbbb                          ",
        "                                                 bbbbb                          ",
        "  bb                              b            bbbbbbbbb                        ",
        "                          b                    bbbbbbbbb                      ff",
        "                     b                       bbbbbbbbbbbbb                    ff",
        "                                             bbbbbbbbbbbbb                    ff",
        "bbbbllllllllllllbbbllllllllllllllllllllllllllbbbbbbbbbbbbbllllllllllllllllllllbb"];
        
var tilemap2 = [ //LEVEL 2
        "                                                                                ",
        "                                                                                ",
        "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        "                                                                                ",
        "                  bb                                 bbbbbb                     ",
        "                                                                                ",
        "                            bbb                                                 ",
        "                                           bb                                   ",
        "                                                                                ",
        "                                                                                ",
        "                                                             bbbbbb             ",
        "                                                                                ",
        "                                                           bb        bbbb       ",
        "                                                                                ",
        "           bbb                                                                  ",
        "                                                       bb                       ",
        "                                                                              ff",
        "       bb                          bbbbbbb                                    ff",
        "                                                                              ff",
        "bbbbllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllbb"];

var gameOver = 0; //stages of the game
var start = 10; //Determines what screen the game is on
var level = 0; //Determines what level the user is on
var customCharMade = 0;
var images = [];
var transX = 0;

//create all of the characters during the introduction screen
var customChar = function() {
    customCharMade = 1;
    
    //Gravity Man Right 2
    noStroke();
    background(255, 255, 255,0);       // set background of the custom char
    fill(120, 108, 108);
    ellipse(200,120,100,100);//head
    fill(148, 80, 80);
    pushMatrix();
    translate(120,-70);
    rotate(PI/6);
    rect(185,190,30,100);//arm 2
    popMatrix();

    fill(148, 80, 80);
    pushMatrix();
    translate(190,-70);
    rotate(PI/6);
    rect(175,320,40,100);//leg 1
    popMatrix();
    
    fill(120, 108, 108);
    rect(160,170,80,150);//body
    
    fill(148, 80, 80);
    pushMatrix();
    translate(-130,125);
    rotate(-PI/6);
    rect(175,320,40,100);//leg 2
    popMatrix();
    
    pushMatrix();
    translate(-80,130);
    rotate(-PI/6);
    rect(185,190,30,100);//arm 1
    popMatrix();
    fill(255, 250, 250);
    ellipse(230,105,20,20);//eye
    ellipse(235,140,20,5);//mouth
    
    images.push(get(0,0,width,height));
    
    
    //Gravity Man Right Neutral
    noStroke();
    background(255,255,255);
    background(255, 255, 255,0);       // set background of the custom char
    fill(120, 108, 108);
    ellipse(200,120,100,100);//head
    fill(148, 80, 80);
    rect(185,190,30,100);//arm 2
    fill(120, 108, 108);
    rect(160,170,80,150);//body
    fill(148, 80, 80);
    rect(175,320,50,100);//leg 1
    rect(175,320,50,100);//leg 2 
    rect(185,190,30,100);//arm 1
    fill(255, 250, 250);
    ellipse(230,105,20,20);//eye
    ellipse(235,140,20,5);//mouth
    
    images.push(get(0,0,width,height));
    
    
    //Gravity Man Right 3
    noStroke();
    background(255, 255, 255);
    background(255, 255, 255,0);       // set background of the custom char
    fill(120, 108, 108);
    ellipse(200,120,100,100);//head
    fill(148, 80, 80);
    
    pushMatrix();
    translate(-80,130);
    rotate(-PI/6);
    rect(185,190,30,100);//arm 2
    popMatrix();

    fill(148, 80, 80);
    pushMatrix();
    translate(-130,125);
    rotate(-PI/6);
    rect(175,320,40,100);//leg 1
    popMatrix();
    
    fill(120, 108, 108);
    rect(160,170,80,150);//body
    
    fill(148, 80, 80);
    pushMatrix();
    translate(190,-70);
    rotate(PI/6);
    rect(175,320,40,100);//leg 2
    popMatrix();
    
    pushMatrix();
    translate(120,-70);
    rotate(PI/6);
    rect(185,190,30,100);//arm 1
    popMatrix();
    
    fill(255, 250, 250);
    ellipse(230,105,20,20);//eye
    ellipse(235,140,20,5);//mouth
    images.push(get(0,0,width,height));
    
    
    //Gravity Man Character 2: Left
    noStroke();
    background(255, 255, 255);
    background(255, 255, 255,0);       // set background of the custom char
    fill(120, 108, 108);
    ellipse(200,120,100,100);//head
    fill(148, 80, 80);
    pushMatrix();
    translate(120,-70);
    rotate(PI/6);
    rect(185,190,30,100);//arm 2
    popMatrix();

    fill(148, 80, 80);
    pushMatrix();
    translate(190,-70);
    rotate(PI/6);
    rect(175,320,40,100);//leg 1
    popMatrix();
    
    fill(120, 108, 108);
    rect(160,170,80,150);//body
    
    fill(148, 80, 80);
    pushMatrix();
    translate(-130,125);
    rotate(-PI/6);
    rect(175,320,40,100);//leg 2
    popMatrix();
    
    pushMatrix();
    translate(-80,130);
    rotate(-PI/6);
    rect(185,190,30,100);//arm 1
    popMatrix();
    fill(255, 250, 250);
    ellipse(170,105,20,20);//eye
    ellipse(165,140,20,5);//mouth
    images.push(get(0,0,width,height));
    
    //Gravity Man Character 1 Left
    noStroke();
    background(255, 255, 255);
    background(255, 255, 255,0);       // set background of the custom char
    fill(120, 108, 108);
    ellipse(200,120,100,100);//head
    fill(148, 80, 80);
    rect(185,190,30,100);//arm 2
    fill(120, 108, 108);
    rect(160,170,80,150);//body
    fill(148, 80, 80);
    rect(175,320,50,100);//leg 1
    rect(175,320,50,100);//leg 2 
    rect(185,190,30,100);//arm 1
    fill(255, 250, 250);
    ellipse(170,105,20,20);//eye
    ellipse(165,140,20,5);//mouth
    images.push(get(0,0,width,height));
    
    
    //Gravity Man Character 2: Left
    noStroke();
    background(255, 255, 255);
    background(255, 255, 255,0);       // set background of the custom char
    fill(120, 108, 108);
    ellipse(200,120,100,100);//head
    fill(148, 80, 80);
    
    pushMatrix();
    translate(-80,130);
    rotate(-PI/6);
    rect(185,190,30,100);//arm 2
    popMatrix();

    fill(148, 80, 80);
    pushMatrix();
    translate(-130,125);
    rotate(-PI/6);
    rect(175,320,40,100);//leg 1
    popMatrix();
    
    fill(120, 108, 108);
    rect(160,170,80,150);//body
    
    fill(148, 80, 80);
    pushMatrix();
    translate(190,-70);
    rotate(PI/6);
    rect(175,320,40,100);//leg 2
    popMatrix();
    
    pushMatrix();
    translate(120,-70);
    rotate(PI/6);
    rect(185,190,30,100);//arm 1
    popMatrix();
    
    fill(255, 250, 250);
    ellipse(170,105,20,20);//eye
    ellipse(165,140,20,5);//mouth
    images.push(get(0,0,width,height));
    
    
    start = 0;
};

var introGManObj = function(x,y){
    this.position = new PVector(x,y);
    this.angle = 0;
    this.currFrame = frameCount;
    this.i = 0;
    this.side = 0;
    
};

introGManObj.prototype.move = function(){
    if (this.side === 0){ //bottom of screen
        this.position.x++;
        if (this.position.x > 350){
            this.side = 1;
            this.angle = -PI/2;
        }
    }
    else if (this.side === 1){//right of screen

        this.position.y--;
        if (this.position.y < 50){
            this.side = 2;
            this.angle = -PI;
        }
        
    }
    else if (this.side === 2){//top of screen
        this.position.x--;
        if (this.position.x < 50){
            this.side = 3;
            this.angle = -PI*1.5;
        }
        
    }
    else{//left of screen
        this.position.y++;
        if (this.position.y > 350){
            this.side = 0;
            this.angle = 0;
        }
        
    }
    
};

introGManObj.prototype.draw = function() {
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    
    //GMan animations
    switch (this.i) {
    case 0:
        image(images[0], -50, -50, 100, 100);
        break;
    case 1:
        image(images[1], -50, -50, 100, 100);
        break;
    case 2:
        image(images[2], -50, -50, 100, 100);
        break;
    case 3:
        image(images[1], -50, -50, 100, 100);
        break;
    }
    
    popMatrix();

    //used for animations
    if (this.currFrame < (frameCount - 20)) {
        this.currFrame = frameCount;
        this.i++;
        if (this.i > 3) {
            this.i = 0;
        }
    }
};

//TileMap Creation

var wallObj = function(x, y) {
    this.x = x;
    this.y = y;
};
var lavaObj = function(x,y){
    this.x = x;
    this.y = y;
};
var finishObj = function(x,y){
    this.x = x;
    this.y = y;
};

var initialized = 0; //used to determine which map has been initialized
var walls = [];
var lava = [];
var finish = [];
var initializeTilemap = function () {
    
    //if (initialized === 0){
    if(level === 0){
        walls = [];
        lava = [];
        finish = [];
        for (var i=0; i<tilemap1.length; i++) {
            for (var j=0; j<tilemap1[i].length; j++) {
                if (tilemap1[i][j] === 'b') {
                    walls.push(new wallObj(j*20, i*20));
                }
                if (tilemap1[i][j] === 'l') {
                    lava.push(new lavaObj(j*20, i*20));
                }
                if (tilemap1[i][j] === 'f') {
                    finish.push(new finishObj(j*20, i*20));
                }
            }
        }
    }
    else if(level === 1){
        walls = [];
        lava = [];
        finish = [];
        for (var i=0; i<tilemap2.length; i++) {
            for (var j=0; j<tilemap2[i].length; j++) {
                if (tilemap2[i][j] === 'b') {
                    walls.push(new wallObj(j*20, i*20));
                }
                if (tilemap2[i][j] === 'l') {
                    lava.push(new lavaObj(j*20, i*20));
                }
                if (tilemap2[i][j] === 'f') {
                    finish.push(new finishObj(j*20, i*20));
                }
            }
        }
    }
        //initialized = 1; //first level is initialized
    //}
};

var displayTilemap = function() {
    fill(0, 0, 255);
    noStroke();
    for (var i =0; i<walls.length; i++) {
        rect(walls[i].x, walls[i].y, 20, 20);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i =0; i<lava.length; i++) {
        rect(lava[i].x, lava[i].y, 20, 20);
    }
    fill(255, 255, 0);
    noStroke();
    for (var i =0; i<finish.length; i++) {
        rect(finish[i].x, finish[i].y, 20, 20);
    }
    fill(255, 0, 0);
    
    
};




//End of TileMap Creation

//GMAN Object CREATION

var GManObj = function(x,y){
    this.position = new PVector(x,y);
    this.angle = 0;
    this.currFrame = frameCount;
    this.gravFrame = frameCount;
    this.i = 0;
    this.side = 0;
    this.jump = 0; //when player is jumping
    this.g = 1; //normal gravity = 1; reverse gravity = -1
    this.acceleration = new PVector(0,0); //only used for y direction
    this.velocity = new PVector(0,0); //only used for y direction
    this.collided = 0; //used to tell when hit boundary MAYBE DONT USE
    this.lives = 3; //3 lives for the character
    this.collideLava = 0;
    this.levelComplete = 0;
    
    this.collideX = 0;
    this.collideXL = 0;
    this.collideXR = 0;
    this.collideY = 0;
    
};

//apply the forces to the acceleration of the ball
GManObj.prototype.applyForce = function(force) {
    this.acceleration.add(force);
};

var gravity = new PVector(0, 0.1);
var jumpForce = new PVector(0, -4);

GManObj.prototype.update = function(){
    if (this.g === 1){
        gravity.set(0,0.1);
        jumpForce.set(0,-4);
    }
    else if (this.g === -1){
        gravity.set(0,-0.1);
        jumpForce.set(0,4);
    }
    
    this.acceleration.set(0, 0);
    if (this.jump === 2) {
        this.applyForce(jumpForce);
        this.jump = 1;
    }
    if (this.jump > 0) {
        this.applyForce(gravity);
    }
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);  
};

// keep GMan in view of the screen. scrolls the tilemap
GManObj.prototype.centerScreen = function(){

    if (this.position.x > 1400){
        transX = -1200;
    }
    else if (this.position.x < 200){
        transX = 0;
    }
    else{
         transX = -this.position.x + 200;
    }
    translate(transX, 0);
};

//used to restart current level when character dies
GManObj.prototype.restartLevel = function(){
    this.collideLava = 0;
    this.position.x = 20;
    this.position.y = 380;
    
};

//handle key inputs
var keys = [];

var keyPressed = function() { 
  keys[keyCode] = true;
};
 
var keyReleased = function() { 
  keys[keyCode] = false; 
};

GManObj.prototype.checkGravity = function(){
    
    if (keyIsPressed && keys[71]){
        this.g *= -1;
        
        if (this.g === 1){
            this.angle = 0;
            this.position.y +=100; 
        }
        else if (this.g === -1){
            this.angle = -PI;
            this.position.y -=100;
        }
        
        
    }
};

GManObj.prototype.move = function(){
    
    this.centerScreen();

    
    if (keyIsPressed && keys[LEFT]) { //this checks if left arrow is pressed
        //this.collidedX();
        //if(this.collideX === 0){
        for (var i = 0; i < walls.length; i++){
            if (this.g === 1){
                var distance = dist(this.position.x, this.position.y-20, walls[i].x+20, walls[i].y);
                if (distance < 10){
                    if (walls[i].x+20 < this.position.x){
                        this.collideXL = 1;   
                    }
                }
            }
            if (this.g === -1){
                var distance = dist(this.position.x, this.position.y+0, walls[i].x+20, walls[i].y);
                if (distance < 10){
                    if (walls[i].x+20 < this.position.x){
                        this.collideXL = 1;   
                    }
                }
                
                
            }
        }
        if (this.collideXL === 0){
            this.position.x -= 3;
        }
        //CHECK FOR END OF LEVEL
        for (var i = 0; i < finish.length; i++){
            if (this.g === 1){
                var distance = dist(this.position.x, this.position.y-20, finish[i].x+20, finish[i].y);
                if (distance < 10){
                    if (finish[i].x+20 < this.position.x){
                        this.levelComplete = 1;
                        this.restartLevel();
                    }
                }
            }
            if (this.g === -1){
                var distance = dist(this.position.x, this.position.y+0, finish[i].x+20, finish[i].y);
                if (distance < 10){
                    if (finish[i].x+20 < this.position.x){
                        this.levelComplete = 1;
                        this.restartLevel();
                    }
                }
                
                
            }
        }
        //END OF CHECK FOR END OF LEVEL
        this.collideXL = 0;
        //}
    }
    if (keyIsPressed && keys[RIGHT]) { //this checks if right arrow is pressed

        for (var i = 0; i < walls.length; i++){
            if (this.g === 1){
                var distance = dist(this.position.x, this.position.y-20, walls[i].x, walls[i].y);
                if (distance < 10){
                    if (walls[i].x > this.position.x){
                        this.collideXR = 1;   
                    }
                }
            }
            else if (this.g === -1){
                var distance = dist(this.position.x, this.position.y+0, walls[i].x, walls[i].y);
                if (distance < 10){
                    if (walls[i].x > this.position.x){
                        this.collideXR = 1;   
                    }
                }
                
            }
        }
        if (this.collideXR === 0){
            this.position.x += 3;
        }
        //CHECK FOR END OF LEVEL
        for (var i = 0; i < finish.length; i++){
            if (this.g === 1){
                var distance = dist(this.position.x, this.position.y-20, finish[i].x, finish[i].y);
                if (distance < 10){
                    if (finish[i].x < this.position.x){
                        this.levelComplete = 1;
                        this.restartLevel();
                    }
                }
            }
            else if(this.g === -1){
                var distance = dist(this.position.x, this.position.y+0, finish[i].x, finish[i].y);
                if (distance < 10){
                    if (finish[i].x < this.position.x){
                        this.levelComplete = 1;
                        this.restartLevel();
                    }
                }
                
            }
        }
        //END OF CHECK FOR END OF LEVEL
        this.collideXR = 0;
    } 
    if (keyIsPressed && keys[32] && this.jump === 0){ //needs work
        
        this.jump = 2;
    }
    //this.isCollided();

    this.collideYB = 0;
    for (var i = 0; i < walls.length; i++){
        var distance = dist(this.position.x, this.position.y-10, walls[i].x+10, walls[i].y);
        if (distance < 15){
            this.collideYB = 1;
            this.collided = 1;
            // if (walls[i].y > this.position.y){
            //     this.collideYB = 1;   
            // }
        }
    }
    if (this.collideYB === 0){
        this.collided = 0;
        this.jump = 1;
    }
    
    
    //USED FOR WHEN YOU HIT LAVA
    for (var i = 0; i < lava.length; i++){
        var distance = dist(this.position.x, this.position.y-10, lava[i].x+10, lava[i].y);
        if (distance < 15){
            this.collideLava = 1;
            //this.collided = 1;
            this.lives--;
            this.g = 1;
            this.angle = 0;
            this.velocity.set(0,0);
            this.restartLevel();
            
        }
    }
    
    //CHECK FOR END OF LEVEL
    for (var i = 0; i < finish.length; i++){
        var distance = dist(this.position.x, this.position.y-10, finish[i].x+10, finish[i].y);
        if (distance < 15){
                this.levelComplete = 1;
                this.restartLevel();
        }
    }
    //END OF CHECK FOR END OF LEVEL





    if (this.velocity.y > 0 && this.g === 1){
        //this.isCollided();
        //this.collidedX();
    
        if (this.collided === 1){// || this.collideX !== 0){ //when you hit a boundary
            this.jump = 0;
            this.velocity.set(0,0);
        }
    }
    else if (this.velocity.y < 0 && this.g === -1){
        //this.isCollided();
        //this.collidedX();
    
        if (this.collided === 1){// || this.collideX !== 0){ //when you hit a boundary
            this.jump = 0;
            this.velocity.set(0,0);
        }
    }
    
    if (this.position.y > 390){
        this.position.y = 380;
    }
    this.update();
    if (this.position.x < 20){
        this.position.x = 20;   
    }
    else if(this.position.x > 1580){
        this.position.x = 1580;   
    }
    if (this.position.y < 50){
        this.position.y = 60; //MIGHT NEED TO TWEAK  
    }
    else if (this.position.y > 400){
        this.position.y = 380;   
    }
};

// GManObj.prototype.isCollided = function(){
//     var y = (this.position.y-(this.position.y)%20)/20;
//     var x = (this.position.x - this.position.x%20)/40;
//     if (y >= 0 && y < 20 && x >=0 && x < 40){
//         if (tilemap1[y][x] === 'b' ){
//             this.collided = 1;
//         }
//         else{
//             this.collided = 0;
//         }
//     }
    
// };

// GManObj.prototype.collidedX = function(){

//     this.collideY = 0;
//     this.collideX = 0;
//     for(var i = 0; i < walls.length; i++){
//         var distance = dist(this.position.x, this.position.y, walls[i].x, walls[i].y);
//         if (distance < 10){
//             this.collideX = 1;
//         }
        
//     }
    
// };

GManObj.prototype.draw = function() {
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    
    //GMan animations
    switch (this.i) {
    case 0:
        image(images[0], -50, -100, 100, 100);
        break;
    case 1:
        image(images[1], -50, -100, 100, 100);
        break;
    case 2:
        image(images[2], -50, -100, 100, 100);
        break;
    case 3:
        image(images[1], -50, -100, 100, 100);
        break;
    case 4:
        image(images[3], -50, -100, 100, 100);
        break;
    case 5:
        image(images[4], -50, -100, 100, 100);
        break;
    case 6:
        image(images[5], -50, -100, 100, 100);
        break;
    case 7:
        image(images[4], -50, -100, 100, 100);
        break;
    }
    
    popMatrix();

    //used for animations
    if(keyIsPressed && keys[RIGHT] && this.g === 1 || keyIsPressed && keys[LEFT] && this.g === -1){
        if(this.i > 3){
            this.i = 0;
        }
        if (this.currFrame < (frameCount - 20)) {
            this.currFrame = frameCount;
            this.i++;
            if (this.i > 3) {
                this.i = 0;
            }
        }
    }
    else if(keyIsPressed && keys[LEFT] && this.g === 1 || keyIsPressed && keys[RIGHT] && this.g === -1){
        if(this.i < 4){
            this.i = 4;
        }
        if (this.currFrame < (frameCount - 20)) {
            this.currFrame = frameCount;
            this.i++;
            if (this.i > 7) {
                this.i = 4;
            }
        }
    }
};

//END OF GMAN DEFINITION




//handle mouse input
var mouseClicked = function() {
    //used for intro screen
    if (start === 0){
        if(mouseX > 130 && mouseX < 270 && mouseY > 220 && mouseY < 265){
            start = 1;
        }
        else if(mouseX > 130 && mouseX < 270 && mouseY > 300 && mouseY < 345){
            start = 2;
        }
    }
    else if(start === 1){
        if (mouseX > 5 && mouseX < 80 && mouseY > 5 && mouseY < 35){
            start = 0;    
        }
    }
    else if (start === 2){
        if (mouseX > 5 && mouseX < 80 && mouseY > 5 && mouseY < 35){
            start = 0;    
        }
    }
};

var introGMan = new introGManObj(20,350);
var gMan = new GManObj(20,380);

var draw = function() {
    if (start === 10){ //preprocessing
        //if (customCharMade === 0) {
            customChar();
            initializeTilemap(); //for when first level is started
        //}
        start = 0;

    }
    else if (start === 0){ //intro screen
        background(217, 208, 217);
        introGMan.draw();
        introGMan.move();
        
        if (gMan.lives === 0){ //for when the game restarts
            gMan.lives = 3;
        }
        
        textSize(30);
        fill(3, 3, 3);
        text("Gravity Man", 115, 100);
        textSize(15);
        text("Created by: Camden Thacker",103,150);
        fill(255, 0, 0,40);
        rect(130,220,140,45);
        rect(130,300,140,45);
        fill(0, 0, 0);
        text("INSTRUCTIONS",145,247);
        text("START GAME",150,328);
        
    }
    else if (start === 1){ //instructions menu
        background(217, 208, 217);
        introGMan.draw();
        introGMan.move();
        
        textSize(30);
        text("Instructions", 120, 100);
        textSize(15);
        var intro = "  Move your character throughout the levels, gathering \n    coins and killing enemies. You can kill enemies by \n  jumping on top of them. In order to beat the game, you \n    will need to utilize your character's ability to reverse \ngravity. You are given 3 lives to complete all of the levels. \n                                    Good luck!  ";
        var keyInputs = "Left Arrow = move left \n\nRight Arrow = move right \n\nSpace Bar = jump \n\nG = change gravity direction";
        textSize(15);
        text(intro, 20, 130);
        text(keyInputs, 120, 255);
        fill(255, 0, 0,40);
        rect(5,5,75,30);
        fill(0, 0, 0);
        text("Back", 25, 25);
    
    }
    else if(start === 2){ //play game
        background(217, 208, 217);
        text("Work in Progress!", 135, 200);
        text("Number of Lives: " + gMan.lives,250,15);
        text("Gravity Setting: " + gMan.g, 260,35);
        fill(255, 0, 0,40);
        rect(5,5,75,30);
        fill(0, 0, 0);
        text("Back", 25, 25);
        gMan.move();
        gMan.draw();
        displayTilemap();

        
        if (gMan.lives <= 0){
            start = 10;
            level = 0;
            gMan.g = 1;
        }
        if (gMan.levelComplete === 1){
             gMan.levelComplete = 0;
             if (level < 1){
                 level++; //increase level when you complete previous level
                 initializeTilemap();
                 gMan.g = 1;
                 //gMan.restartLevel();
             }
             else{
                 level = 0;
                 start = 10; //restart game when you win
                 //gMan.restartLevel();
                 gMan.g = 1;
                 gMan.lives = 3;
             }
        }
        if (gMan.collided === 1){//gMan.gravFrame < (frameCount - 4)) {
            //gMan.gravFrame = frameCount;
            gMan.checkGravity();
        }
        
        
    }
};

//END OF FILE
}};
