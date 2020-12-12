class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock;
    }

    getFoodStock(){
        var foodStockRef  = database.ref('food');
        foodStockRef.on("value",function(data){
        this.foodStock = data.val();
    })
    }
    updateFoodStock(stock){
        database.ref('/').update({
            food: stock
          });
    }

    display(){
        var x = 50;
        var y = 250;
        
        imageMode(CENTER);
        image(this.image,x,y,150,150);

        
    }
}
