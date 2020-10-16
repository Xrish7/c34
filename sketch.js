var ball;
var database,ball,position
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var location = database.ref("ball/position");
    location.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown("A")){
        writePosition(-1,0);
    }
    else if(keyDown("D")){
        writePosition(1,0);
    }
    else if(keyDown("W")){
        writePosition(0,-1);
    }
    else if(keyDown("S")){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({
    x : ball.x + x,
    y : ball.y + y
   })
}
function readPosition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function showError() {
    console.log("error");
}