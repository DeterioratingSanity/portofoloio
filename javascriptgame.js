var sketchProc = function(processingInstance) {

  with(processingInstance) {

    size(400, 400);

    frameRate(60);

    //ProgramCodeGoesBelow
    noStroke();
    var xMove = 200;
    var yMove = 200;
    var xMax = 400;
    var xMin = 0;
    var yMax = 400;
    var yMin = 0;

    var tarX = random(0, 400);
    var tarY = random(0, 400);
    var tarC = 0;
    var tarD = 100;

    draw = function() {
      background(255, 255, 255);

      //game circle
      fill(173, 112, 21);
      ellipse(tarX, tarY, 10, 10);

      //square
      fill(255, 0, 0);
      rect(xMove, yMove, 30, 30);

      keyPressed = function() {

        if (keyCode === 68) { //straight movements
          xMove = xMove + 2;
        }
        if (keyCode === 65) {
          xMove = xMove - 2;
        }
        if (keyCode === 87) {
          yMove = yMove - 2;
        }
        if (keyCode === 88) {
          yMove = yMove + 2;
        }

        //layout square for diag movement, two key inputs majorly funky

        if (keyCode === 69) { //diagonal movements
          xMove = xMove + 2;
          yMove = yMove - 2;
        }
        if (keyCode === 81) {
          xMove = xMove - 2;
          yMove = yMove - 2;
        }
        if (keyCode === 90) {
          xMove = xMove - 2;
          yMove = yMove + 2;
        }
        if (keyCode === 67) {
          xMove = xMove + 2;
          yMove = yMove + 2;
        }
        //start from endscreen
        if (tarD < 1 && keyCode === 49) {
          tarD = 25;
          tarC = 0;
          xMove = 200;
          yMove = 200;
        }
        //resets
        if (keyCode === 82) {
          tarD = 25;
          tarC = 0;
          xMove = 200;
          yMove = 200;
        }
      };

      //bounds box to prevent leaving pictured canvas regions
      if (xMove + 30 > xMax) {
        xMove = xMove - 2;
      }
      if (xMove < xMin) {
        xMove = xMove + 2;
      }
      if (yMove + 30 > yMax) {
        yMove = yMove - 2;
      }
      if (yMove < yMin) {
        yMove = yMove + 2;
      }

      //positional coordinates of box; perhaps to designate relative position?
      textSize(12);
      fill(255, 0, 0);
      text(xMove, 1, 10);
      text(yMove, 1, 20);
      text(tarC, 1, 30);

      //when over dot, move dot, score up
      if (tarX < xMove + 30 && tarX > xMove && tarY < yMove + 30 && tarY > yMove) {
        tarC = tarC + 1;
        tarX = random(0, 400);
        tarY = random(0, 400);
      }

      //winning score
      if (tarC > 24) {
        tarD = tarD - 1;
      }


      text("Ctrl For Game Controls", 271, 13);

      if (keyCode === 17) { //controls
        fill(189, 189, 189);
        rect(91, 50, 220, 187);
        textSize(20);
        fill(0, 0, 0);
        text("Q: Up/Left Diagonal", 95, 70);
        text("A: Left Full", 95, 90);
        text("Z: Down/Left Diagonal", 95, 110);
        text("W: Up Full", 95, 130);
        text("X: Down Full", 95, 150);
        text("E: Up/Right Diagonal", 95, 170);
        text("D: Right Full", 95, 190);
        text("C: Down/Right Diagonal", 95, 210);
        text("R: Restart Game", 95, 230);
      }
      
      //if (load) {
      	//fill(189,189,189);
        //rect(91,50,220,187);
        
      //}

      //end game state
      if (tarD < 1) {
        background(255, 255, 255);
        textSize(27);
        text("You Win, Press 1 to Play Again", 14, 200);
      }

    };


    //ProgramCodeGoesAbove

  }
};

var canvas = document.getElementById("mycanvas2");
var processingInstance = new Processing(canvas, sketchProc);
