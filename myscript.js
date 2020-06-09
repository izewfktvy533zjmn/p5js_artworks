// myscript.js

function setup() {
    createCanvas(600, 400);
    noStroke();
    background('skyblue');
}

var x, y, r;
var circles = [];

function draw() {
    x = random(width)
    y = random(height);
    
    if (random() > 0.9) {
        r = random(50, 90)
    } else {
        r = random(10, 40)
    }
    
    fill(255, 255, 255, random(30, 250));
    ellipse(x, y, r, r);
    
    circles.push([x, y, r]);

    if (circles.length == 100) {
        while (circles.length > 0) {
            tmp= circles.pop();
            x = tmp[0];
            y = tmp[1];
            r = tmp[2];
            console.log(x, y, r);
            fill(0, 0, 0);
            ellipse(x, y, r, r);
        }
        //mousePressed();
    }
}

function mousePressed() {
    //clear();
    setup();
}

function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}
