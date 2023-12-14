function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(220);
    
    
    
    if(mouseX < 400) {
    //day
      
    //sky
    fill (174, 214, 241);
    rect (0, 0, 800);
    
    //grass
    fill ( 82, 190, 128 );
    rect ( 0, 500, 800  );
      
      //left cloud
    fill (240, 243, 244);
    square( 150, 60, 55, 20);
    square( 200, 35, 80, 20);
    square( 175, 55, 70, 20);
    square( 195, 20, 60, 20);
    square( 155, 15, 60, 20);
    
    //right cloud
    square(620, 70, 80, 20);
    square(680, 70, 55, 20);
    square(620, 35, 80, 20);
    square(575, 55, 70, 20);
      
    //base of house
    fill (260, 203, 167);
    rect(300, 300, 400, 400);
      
    //chimney
    fill ( 120, 66, 18  );
    rect(350, 180, 40, 100);
      
    //roof
    fill (250, 97, 85 ) ;
    triangle(300, 300, 700, 300, 500, 100);
    fill ( 120, 66, 18  );
    rect(450, 550, 100, 150);
      
    //door handle
    fill (23, 32, 42 );
    ellipse ( 470, 625, 10);
      
    //letter box 
    fill ( 120, 66, 18);
    rect ( 485, 640, 35, 8);
      
    fill ( 235, 245, 251 );
    //left window
    rect ( 350, 340 , 100);
    //right window 
    rect ( 550, 340 , 100);
    
    fill ( 120, 66, 18  );
    //cross on window
    rect ( 350, 385, 100, 5);
    rect ( 395, 340, 5, 100);
  
    rect ( 550, 385, 100, 5);
    rect ( 595, 340, 5, 100);
    
    //exhaustion pipe
    fill (23, 32, 42 );
    rect ( 210, 698 , 50 , 8);
    
    //top of car
    fill( 350 , 25, 50);
    rect(110, 620, 75 ,45);
    
    //bottom of car
    fill (350 , 25 , 50);
    rect (40, 665 , 210 , 50);
    
    //car wheels
    fill (23, 32, 42 );
    ellipse( 90, 715 , 50 , 45);
    ellipse( 190 , 715, 50 , 45);
    
    //tree log
    fill(146, 43, 33 );
    rect( 80 , 350 , 50 , 200);
    
    //tree
    fill (69, 179, 157);
    triangle( 10 , 470, 200, 470, 105 , 200);
    triangle(5, 400, 200, 400, 105 , 200);
    triangle( 20 , 330, 190, 330, 105 , 190);
    
    //headlight
    fill (214, 219, 223 );
    rect ( 40, 690 , 15 , 20);
    
    //sun
    fill (245, 176, 65  );
    ellipse(10, 5, 200, 200);
      
    //tree decorations 
      fill (214, 234, 248  )
     ellipse( 100, 350 , 20 ) 
     ellipse( 160, 370, 20 ) 
     ellipse( 170 , 440 , 20 ) 
      ellipse( 90, 400 , 20) 
      ellipse( 40 , 370 , 20 ) 
      ellipse( 50 , 440, 20 ) 
      ellipse( 150, 300 , 20) 
      ellipse( 100 , 290 , 20 ) 
      ellipse( 50 , 300, 20 ) 
      ellipse( 120 , 450, 20)
      
    fill (212, 172, 13 )
    push();
    translate(width * 0.13, height * 0.23);
    star(0, 0, 12, 28, 5);
    pop();
      
      
    }else if( mouseX >=400 ) {
    //night
    
    //sky
    fill (21, 67, 96 )
    rect (0, 0, 800);
      
    //grass
    fill ( 30, 132, 73 );
    rect ( 0, 500, 800  );
    
    //base of house
    fill (237, 187, 153);
    rect(300, 300, 400, 400);
    
    //chimney
    fill ( 120, 66, 18  );
    rect(350, 180, 40, 100);
    
    //roof
    fill (205, 97, 85) ;
    triangle(300, 300, 700, 300, 500, 100);
    
    //door
    fill ( 120, 66, 18  );
    rect(450, 550, 100, 150);
    
    //door handle
    fill (23, 32, 42 );
    ellipse ( 470, 625, 10);
    
    //letter box 
    fill ( 120, 66, 18);
    rect ( 485, 640, 35, 8);
  
    fill (247, 220, 111 );
    //left window
    rect ( 350, 340 , 100);
    //right window 
    rect ( 550, 340 , 100);
    
    //cross on window
    fill ( 120, 66, 18  );
    rect ( 350, 385, 100, 5);
    rect ( 395, 340, 5, 100);
  
    rect ( 550, 385, 100, 5);
    rect ( 595, 340, 5, 100);
    
    //exhaustion pipe
    fill (23, 32, 42 );
    rect ( 210, 698 , 50 , 8);
    
    //top of car
    fill(203, 67, 53);
    rect(110, 620, 75 ,45);
    
    //bottom of car
    fill (203, 67, 53);
    rect (40, 665 , 210 , 50);
    
    //car wheels
    fill (23, 32, 42 );
    ellipse( 90, 715 , 50 , 45);
    ellipse( 190 , 715, 50 , 45);
    
    //tree log
    fill(146, 43, 33 );
    rect( 80 , 350 , 50 , 200);
    
    //tree
    fill (17, 122, 101);
    triangle( 10 , 470, 200, 470, 105 , 200);
    triangle(5, 400, 200, 400, 105 , 200);
    triangle( 20 , 330, 190, 330, 105 , 190);
    
    //headlight
    fill (247, 220, 111 );
    rect ( 40, 690 , 15 , 20);
    
    //sun
    fill (234, 237, 237 );
    ellipse(10, 5, 200, 200);
      
    //tree decorations 
      fill ( 231, 76, 60 )
     ellipse( 170, 440 , 20 ) 
      ellipse( 40, 370 , 20 ) 
      ellipse( 150, 300 , 20)
      ellipse( 50 , 300, 20 ) 
      ellipse( 90, 400 , 20)
      fill ( 46, 204, 113)
      ellipse( 50 , 440, 20 )  
      ellipse( 100 , 290 , 20 )  
      ellipse( 120 , 450, 20)
      ellipse( 160, 370, 20 ) 
      ellipse( 100, 350 , 20 )
       
      
      
    //stars
    fill (212, 172, 13 )
    push();
    translate(width * 0.3, height * 0.08);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 10);
    pop();
      
    push();
    translate(width * 0.05, height * 0.3);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 10);
    pop();
      
    push();
    translate(width * 0.4, height * 0.15);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 5);
    pop();
      
    push();
    translate(width * 0.3, height * 0.35);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 5);
    pop();
      
    push();
    translate(width * 0.13, height * 0.23);
    star(0, 0, 12, 28, 5);
    pop();
      
    push();
    translate(width * 0.8, height * 0.09);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 5);
    pop();
      
    push();
    translate(width * 0.6, height * 0.05);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 10);
    pop();
      
      push();
    translate(width * 0.9, height * 0.3);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 14, 10);
    pop();
      
  }
  
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
      
      
      
    
    }
    
  

   
}



