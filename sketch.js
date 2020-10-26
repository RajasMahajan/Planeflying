var plane;
var obstracle;
var obstracleG;
var PLAY=1;
var STOP=2;
var PAUSE=3;
var END=0;
var gamestate=0;
var score=0;
function preload(){
 
}

function setup() {
createCanvas(400,400);
  plane=createSprite(90,200,40,30);
  obstracleG=new Group()

}

function draw(){
background("black");
  
 
  if(gamestate===PLAY)
  { 
  if(frameCount%10===0)
  { obstracle=createSprite(410,200,10,10)
    obstracle.y=Math.round(random(12,400))
  obstracle.velocityX=-2;
   obstracle.lifetime=200 
   obstracleG.add(obstracle)
    }
    
    if(keyDown("up")){
      plane.y=plane.y-5
      
    }
    
   // plane.y=plane.y+3
     if(keyDown("Down")){
      plane.y=plane.y+5
      
    }
  if(frameCount%10===0){
    score=score+1;
  }
  
if(plane.isTouching(obstracleG)){
 
  gamestate=STOP;
}
 
  }
  if(gamestate===END){
    text(" HOME SCREEN ",140,75)
    if(score>=1)
    {
    text("Please press space to reset the score.",80,100)
    }
    text("please press enter to start the game.",150,200)
    text("please read the following instructions before starting game.",30,260)
    text("1) please control plane by up and Down key.",100,280)
    text("2) you need to see that plane does not touch to obstacles.",70,300)
    text("3) Do not touch the borderlines.",100,320)
   obstracleG.destroyEach()
    plane.y=200
     if(keyDown("space")){
   score=0;
 }
     if(keyDown("enter")){
    score=0;
    gamestate=PLAY;
  }
  }
  
if(gamestate===STOP)
{
text(" GAME OVER !!!!!!!!!!!!!!!!!!!!!!",130,160)
text("plese press shift to go to home screen",170,200)
  obstracleG.destroyEach()
      plane.y=200
  if(keyDown("shift")){
  
  gamestate=END;
}
 
}
 
  
text("score: "+score,160,20)
 
  if(plane.y>400||plane.y<0){
    gamestate=STOP;
  }
drawSprites();
}