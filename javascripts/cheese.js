"use strict";
  let sandwichSquared= require("./sandwich");
  var cheeseChooser= document.getElementById('cheese-chooser');
	  var cheesePrices={"swiss":0.80, "cheddar": 1.15, "provalone":1.30,"meunster":1.50};
	  var selectedTopping;
	  let newCheese= function(event){
	  	if(cheeseChooser.value=== "swiss"){
	  		 sandwichSquared.addTopping(cheesePrices.swiss);
	  	} else if(cheeseChooser.value === "cheddar"){
	  		 sandwichSquared.addTopping(cheesePrices.cheddar);
	  	} else if(cheeseChooser.value === "provalone"){
	  		 sandwichSquared.addTopping(cheesePrices.provalone);
	    } else if(cheeseChooser.value === "meunster"){
	  		 sandwichSquared.addTopping(cheesePrices.meunster);
	  	}
	  };

module.exports= {newCheese};