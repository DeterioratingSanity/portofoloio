var sketchProc = function(processingInstance) {

  with(processingInstance) {

    size(400, 400);

    frameRate(60);


var x;
x=10;
var y;

noStroke();

draw = function() {
    background(255,255,255);
    fill(3, 3, 3);
    ellipse(200,y,x,x);
    
    if (x < 150) {
    x = x + 1;
    }   else {
    x = 150;
    }   
    
    if (y < 200) {
    y = 200;
    }
    
    if (x < 150) {
    y = 400;       
    }   else {
    y = y - 1;    
    }
    
    //should hide box until circle fills
    
    if (x < 150) {
    fill(255,255,255);
    }   else {
    fill(3,3,3);
    }
    
    rect(186, y+81, 30, 30);
    
};


  }
};

var canvas = document.getElementById("mycanvas1");
var processingInstance = new Processing(canvas, sketchProc);