var database;
var food;
var foodStock;
var buttonAddFood, buttonFeedFood;
var foodObj;
var fedTime, lastFed;

var dog, dogImage, dogHappyImage;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogHappyImage = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1200,800);

  
  
  foodStock = database.ref('food');
  foodStock.on("value", function (data){
    food = data.val();})

  dog = createSprite(1000,400);
  dog.addImage(dogImage);
  dog.scale = 0.25;

  //buttons
  buttonAddFood = createButton("ADD FOOD");
  buttonAddFood.position(800,250);
  buttonAddFood.mousePressed(()=>{addFood();});


  buttonFeedFood = createButton("FEED FOOD");
  buttonFeedFood.position(900,250);
  buttonFeedFood.mousePressed(()=>{feedDog(food);});
  
  

}

function draw() {  
  background("#2D8956");

  //reading feeding time
  fedTime = database.ref("feedTime");
  fedTime.on("value", function (data){
    lastFed=data.val()
  })

 
  textSize(28);
  fill("red");
  stroke("white")
  strokeWeight(3);
  text("Food Stock : "+food,550,150);

  textSize(30)
  fill("White");
  stroke("black")
  strokeWeight(8);
  text("Press UP-ARROW to feed the dog!",400,50);
  foodObj.display();
  drawSprites();
}

function addFood(){
  food++;
    database.ref('/').update({
      food: food
  });
}

function feedDog(f){
  if (f <= 0){
    f = 0;
  }
  else{
    f = f - 1;
  }
    database.ref('/').update({
      food: f
  });
}


