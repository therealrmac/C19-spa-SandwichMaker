console.log('cheese has loaded');
var Sandwich= (function(cheese){
	  var cheesePrices={"swiss":0.80, "cheddar": 1.15, "provalone":1.30,"meunster":1.50};
	  cheese.newCheese= function(event){
	  	if(cheeseChooser.value=== "swiss"){
	  		return Sandwich.addTopping(cheesePrices.swiss);
	  	} else if(cheeseChooser.value === "cheddar"){
	  		return Sandwich.addTopping(cheesePrices.cheddar);
	  	} else if(cheeseChooser.value === "provalone"){
	  		return Sandwich.addTopping(cheesePrices.provalone);
	    } else if(cheeseChooser.value === "meunster"){
	  		return Sandwich.addTopping(cheesePrices.meunster);
	  	}
	  }

	  return cheese;
})(Sandwich || {});