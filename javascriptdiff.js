//stages have to live in !=0 diff because otherwise things get funny- i dont know why

var sketchProc = function(processingInstance) {

  with(processingInstance) {

    size(400, 400);

    frameRate(60);
 //dont eat me, fool ^
   
    var charY = 190;
    var charX = 10;
    var borderMinX = 0;
    var borderMaxX = 400;
    var borderMinY = 0;
    var borderMaxY = 400;
    var difficulty = 0;
    var stage = 0;
    
    //lives
    var life = 3;
    var hitpoint = 20;
    
    //first obstacle upper
    var uobst1x;
    var uobst1y;
    
    //first obstacle lower
    var dobst1x;
    var dobst1y;
    
    //second obstacle upper
    var uobst2x;
    var uobst2y;
    
    //center obstacle;
    var centObstX;
    var centObstY;
    var centObstH;
    
    //obstacle timer
    var obsttime = 0;
    
    //obstacle color
    var obstcol = (100,100,100);
    var tilecol = (57, 255, 20);
    
    //tile
    var tile1x;
    var tile1y;
    var tile2x;
    var tile2y;
    var tiledim = 20;
    var tileCount;
    
    var t1Time = 1;
    var t2Time = 1;
    var obstTime = 1;
    var obstUp = 0;
    
    var key = false;
    	
      //game go brr
    	draw = function () {
       	background(255,255,255); 
        
       	//difficulty selectors (&health)
        keyPressed = function() {
        	if (keyCode === 49) {
        		difficulty = 1;
            life = 3;
        	}
          if (keyCode === 50) {
          	difficulty = 2;
            life = 2;
          }
          if (keyCode === 51) {
          	difficulty = 3;
            life = 1;
          }
        	//cannot reset/mod difficulty post first selection
         
        }
        
       //menu display
       if (difficulty === 0) {
       	background(255,255,255);
        fill(0,0,0);
        rect(50,150,300,50);
        rect(70,130,260,90);
        //rounded rectangles are an absolute pain
        ellipse(70,150,38,38); 
        ellipse(70,201,38,38);
        ellipse(331,150,38,38);
        ellipse(331,201,38,38);
        fill(255,255,255);
        textSize(40);
        text("Difficulty Test",83,190);
        fill(0,0,0);
        textSize(15);
        text("Press 1, 2, or 3 to begin",120,240);
       }
       
       //first difficulty & modifiers
       if (difficulty === 1) {
        	keyPressed = function() {
          	//move right
        		if (keyCode === 68) {
            	charX += 3;
            }
            //move left
            if (keyCode === 65) {
            	charX -= 3;
            }
            //move up
            if (keyCode === 87) {
            	charY -= 3;
            }
            //move down
            if (keyCode === 83) {
            	charY += 3;
            }
            
            //hp tester
            if (keyCode === 90) {
            	life -= 1;
            }
            //cheeky
            if (keyCode === 49) {
            	stage += 1;
            }
        	}
          noStroke();
       		fill(255,0,0);
       		rect(charX,charY,30,30);
          	//right bound/stage end
          	if (charX + 30 > borderMaxX) {
          		charX = borderMinX;
              stage += 1;
              obsttime = 0;
              charY = 190;
          	}
            //left bound
            if (charX < borderMinX) {
            	charX = charX + 3;
            }
            //upper bound
            if (charY < borderMinY) {
            	charY = charY + 3;
            }
            //bottom limiter, var was disagreeable
            if (charY + 30 > borderMaxY) {
            	charY = charY - 3;
            }
       }
       
       //second difficulty & modifiers
       if (difficulty === 2) {
        	keyPressed = function() {
          	//move right
          	if (keyCode === 68) {
            	charX += 3;
            }
            //move left
            if (keyCode === 65) {
            	charX -= 3;
            }
            //move up
            if (keyCode === 87) {
            	charY -= 3;
            }
            //move down
            if (keyCode === 83) {
            	charY += 3;
            }
            
            //hp tester
            if (keyCode === 90) {
            	life -= 1;
            }
          }
          noStroke();
       		fill(0,255,0);
       		rect(charX,charY,30,30);
          	//right bound/stage end
          	if (charX + 30 > borderMaxX) {
            	charX = borderMinX;
              stage += 1;
              obsttime = 0;
              charY = 190;
            }
            //left bound
            if (charX < borderMinX) {
            	charX = charX + 3;
            }
            //upper bound
            if (charY < borderMinY) {
            	charY = charY + 3;
            }
            //bottom limiter
            if (charY + 30 > borderMaxY) {
            	charY = charY -3;
            }
       }
       
       //third difficulty & modifiers
       if (difficulty === 3) {
        	keyPressed = function() {
          	//move right
        		if (keyCode === 68) {
          		charX += 3;
          	}
            //move left
            if (keyCode === 65) {
            	charX -= 3;
            }
            //move up
            if (keyCode === 87) {
            	charY -= 3;
            }
            //move down
            if (keyCode === 83) {
            	charY += 3;
            }
            
            //hp tester
            if (keyCode === 90) {
            	life -= 1;
            }
          }
          noStroke();
       		fill(0,0,255);
       		rect(charX,charY,30,30);
          	//right bound/stage 
          	if (charX + 30 > borderMaxX) {
            	charX = borderMinX;
              stage += 1;
              obsttime = 0;
              charY = 190;
            }
            //left bound
            if (charX < borderMinX) {
            	charX = charX + 3;
            }
            //upper bound
            if (charY < borderMinY) {
            	charY = charY + 3;
            }
            //bottom limiter
            if (charY + 30 > borderMaxY) {
            	charY = charY - 3;
            }
       }
       
       //Difficulty and stage, only whilst ingame / life
       if (difficulty != 0) {
       			//debug gui
       	//fill(0,0,0);
       	//textSize(12);
       	//text(difficulty,2,12);
       	//text(stage, 2, 24);
        //text(life,2,36);
        	//life work
       		if (life === 3) {
       			fill(255,0,0);
        		rect(20,20,hitpoint,hitpoint);
            rect(50,20,hitpoint,hitpoint);
            rect(80,20,hitpoint,hitpoint);
       		}
          if (life === 2) {
          	fill(255,0,0);
          	rect(20,20,hitpoint,hitpoint);
            rect(50,20,hitpoint,hitpoint);
          }
          if (life === 1) {
          	fill(255,0,0);
          	rect(20,20,hitpoint,hitpoint);
          }
    //game stages below     
          //tutorial
          if (stage === 0) {
          	fill(0,0,0);
            textSize(18);
            text("Avoid obstacles, and make it as far as you can.",15,300);
          }
          
        	// level one (gap)
       		if (stage === 1) {
       			//obstacle coordinates
       			 uobst1x = 380;
        		 uobst1y = 0;
        		 dobst1x = 380
        		 dobst1y = 240;
       			fill(obstcol);
        		rect(uobst1x,uobst1y,20,170);
        		rect(dobst1x,dobst1y,20,160); 
            
            	//collisions, l1
            	if (charX + 30 > uobst1x && charY < uobst1y + 170) {
       					charX = 10;
                charY = 190;
                life -= 1;
       				}
              if (charX + 30 > dobst1x && charY + 30 > dobst1y) {
              	charX = 10;
                charY = 190;
                life -= 1;
              }
           fill(0,0,0);
           textSize(18);
           text("Simple to begin with",120,300);
       		}
          
          //level two (block)
          if (stage === 2) {
          	 uobst1x = 155;
             uobst1y = 155;
            fill(100,100,100);
            rect(uobst1x,uobst1y,100,100);
            fill(obstcol);
            //taunt
            fill(0,0,0);
            textSize(18);
            text("Ohoho, can't go straight now!",90,300);
            
            	//collisions
              if (charX + 30 > uobst1x && charX < uobst1x + 100 && charY + 30 > uobst1y && charY < uobst1y + 100) {
              charX = 10;
              charY = 190;
              life -= 1;
              }
          }
          
          //level three (patience)
          if (stage === 3) {	
             uobst1x = 0;
             uobst1y = 160;
             dobst1x = 0;
             dobst1y = 240;
            	//impermeable
               uobst2x = 300;
               uobst2y = 170;
              
            fill(100,100,100);
            rect(uobst1x,uobst1y,400,10);
            rect(dobst1x,dobst1y,400,10);
            
              obsttime += 0.1;
              
              //collisions
              if (charY < uobst1y + 10) {
              	charX = 10;
                charY = 190;
                life -= 1;
              }
              if (charY + 30 > dobst1y) {
              	charX = 10;
                charY = 190;
                life -= 1;
              }
              if (charX + 30 > 300 && obsttime < 80) {
              	charX = 10;
                charY = 190;
                life -= 1;
              }
              
              //timer
              if (obsttime > 80) {
              	uobst2x = 500;
              }
              
              //taunt
              fill(0,0,0);
              textSize(18);
              text("Be patient, friend.", 140,300);
              
            //impermeable (at end to change color)
            fill(obstcol);
            rect(uobst2x,uobst2y,10,70)
              
          }  
          
          //level four (rush, barrier will permanently up at some value)
          if (stage === 4) {
          	 uobst1x = 0;
             uobst1y = 160;
             dobst1x = 0;
             dobst1y = 240;
            	//impermeable
               uobst2x = 270;
               uobst2y = 170;  
              
            fill(100,100,100);
            rect(uobst1x,uobst1y,400,10);
            rect(dobst1x,dobst1y,400,10);
            
              obsttime += 0.1;
              
              //collisions
              if (charY < uobst1y + 10) {
              	charX = 10;
                charY = 190;
                life -= 1;
              }
              if (charY + 30 > dobst1y) {
              	charX = 10;
                charY = 190;
                life -= 1;
              }
              if (charX + 30 > 270 && charX < 280 && obsttime > 20) {
              	charX = 10;
                charY = 190;
                life -= 1;
                obsttime = 0; //resets to prevent getting game-ended
              }
              
              //timer
              if (obsttime < 20) {
              	uobst2x = 500;
              }
              
              //taunt
              fill(0,0,0);
              textSize(18);
              text("Now you need to rush!", 120,300);
              
            //impermeable (at end to change color)
            fill(obstcol);
            rect(uobst2x,uobst2y,10,70)
          }
          
          //level five (two green tiles, touch reduces var by 1 and removes tile, need both to deact a barrier)
          if (stage === 5) {
             tile2x = 100;
             tile1y = 100;
             tile2y = 300;
             tileCount = 2;
             tile1x = 100;
             centObstX = 300;
             centObstY = 0;
             centObstH = 400;
            
            //tile collision
            
            if (charY < tile1y + 20 && charY + 30 > tile1y && charX + 30 > tile1x && charX < tile1x + 20) {
            	t1Time -= 0.1;
              charX = 10;
              charY = 190;
            }
            if (charY < tile2y + 20 && charY + 30 > tile2y && charX + 30 > tile1x && charX < tile1x + 20) {
              t2Time -= 0.1;
              charX = 10;
              charY = 190;
            }
            
            //tile counter
            
            if (t1Time < 1) {
            	tileCount -= 1;
              tile1x = 500;
            }
            if (t2Time < 1) {
            	tileCount -= 1;
              tile2x = 500;
            }
            
            if (obstTime > 0) {
            	fill(0,0,0);
              textSize(18);
              text("Check out the Keys.",120,300);
            }
            if (obstTime < 0) {
            	obstTime = 0;
            	obstUp += 0.01
              centObstH = 100;
              
              fill(0,0,0);
              textSize(18);
              text("The way is now open.", 120,300);
            }
            
            fill(57, 255, 20);
            rect(tile1x,tile1y,tiledim,tiledim);
            rect(tile2x,tile2y,tiledim,tiledim);
            
            fill(100,100,100);
            rect(centObstX,centObstY,30,centObstH);
            
            if (charX + 30 > centObstX && obstTime > 0) {
            	charX = 10;
              charY = 190;
              life -= 1;
            }
            
             if (tileCount < 1) {
            	obstTime -= 0.1;
            }
            //doesnt work for some reason
            
          }
          
          //level six (converging walls)
          if (stage === 6) {
          	
          	let uobst1x = 0;
            let uobst1y = 90 + charX/4.13;
            
            let dobst1x = 0;
            let dobst1y = 310 - charX/4.13;
            
            if (charY < uobst1y + 10 || charY + 30 > dobst1y) {
            	charX = 10;
              charY = 190;
              life -= 1;
            }
            
            fill(100,100,100);
            rect(uobst1x,uobst1y,400,10);
            rect(dobst1x,dobst1y,400,10);
            
            //taunt
            	fill(0,0,0);
              textSize(18);
              text("This'll be a tight squeeze.",100,300);
          }
          
          
          //end state
          if (stage > 6) {
          	fill(158, 113, 58);
            rect(175,230,50,20);
            fill(171, 144, 12);
            rect(195,200,10,30);
            ellipse(200,200,50,50);
            rect(175,175,50,20);
            fill(130, 110, 9);
            rect(175,175,50,7);
            
            fill(0,0,0);
            textSize(18);
            text("Good job, and thanks for playing!",75,300);
          }
    //game stages above      
          
          //dead below v (@ bottom to prevent being overlapped by remaining obstacles)
          if (life < 1) {
          	//ded
          	background(100,100,100);
            fill(0,0,0);
            rect(50,150,300,50);
        		rect(70,130,260,90);
        		//rounded rectangles are :P
        		ellipse(70,150,38,38); 
        		ellipse(70,201,38,38);
        		ellipse(331,150,38,38);
        		ellipse(331,201,38,38);
            fill(255,255,255);
            textSize(40)
            text("Game Over",94,190);
           	textSize(16);
           	text("Press R to try again.",120,300);
            
            keyPressed = function () {
            	if (keyCode === 82) {
              difficulty = 0;
              }
            }
          }
          
       }
       
       //bottom of draw, do not consume 
       }
//don't eat me either v
  }
}; 

var canvas = document.getElementById("mycanvas3");
var processingInstance = new Processing(canvas, sketchProc);