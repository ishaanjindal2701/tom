var cat,bg;
var cImg,bgImg;











function preload() {
    //load the images here
    cImg=loadImage("images/cat1.png")
    bgImg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(900,700,10,10);
cat.addImage(cImg);
cat.scale=0.1;
cat.depth=cat.depth+1

bg=createSprite(500,400,10,10);
bg.addImage(bgImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
