// myscript.js

var canvasWidth  = 800;
var canvasHeight = 800;
var a = 300;


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    noStroke();
    background("#f5f5f5");
}

function draw() {
    smooth();
    fill(51, 51, 51);
    ellipse(canvasWidth/2, canvasHeight+canvasHeight/60-15-a, 130, 630);
    fill(255, 255, 255);
    ellipse(canvasWidth/2, canvasHeight+canvasHeight/60+15-a, 110, 615);
    
    fill(0);
    triangle(canvasWidth/2, canvasHeight/2+150-a, canvasWidth/2-3, canvasHeight/2+315-a, canvasWidth/2+3, canvasHeight/2+315-a);
    ellipse(canvasWidth/2, canvasHeight/2+312-a, 15, 15);
    ellipse(canvasWidth/2, canvasHeight/2+312+17-a, 18, 21);
    fill(51, 51, 51);

    rectMode(CENTER);
    rect(canvasWidth/2, canvasHeight/2+canvasHeight/2+66-a, 162, 200);
    rect(canvasWidth/2, canvasHeight/2+canvasHeight/2+180-a, 162, 200);
    
}

function mousePressed() {
    //clear();
    setup();
}
