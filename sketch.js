//Create variables here
var food
function preload()
{
	dogHappy=loadImage("images/dogImg1.png")
  dogSad=loadImage("images/dogImg.png")
}


function setup() {
	createCanvas(800, 700);

  database=firebase.database()
  
database.ref('food').on("value",readPosition)

dog=createSprite(700,400,20,20)
dog.addImage(dogSad)
dog.scale=0.2

milk1=new Food()
milk1.getfeedtime()
}



function draw() {  
background(0)
  drawSprites();
  //add styles here
textSize(20)

text("fedtime: "+ milk1.feedtime,200,50)
milk1.buttons()
milk1.milkImg()

if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.2
}


}

function readPosition(data){
food=data.val()
}

function writeStock(data){
database.ref('/').update({
  food:data,
  feedtime:hour()
})
}