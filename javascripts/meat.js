"use strict"; 
  let sandwichSquared= require("./sandwich");
var meatChooser = document.getElementById("meat-chooser");
	var meatPrices={"turkey": 0.90, "bacon": 1.50, "ham":1.25,"chicken":1.10};
	var selectedTopping;
	let newMeat= function(event){
		console.log(event);
		if(meatChooser.value=== "turkey"){
	  		sandwichSquared.addTopping(meatPrices.turkey);
	  	} else if(meatChooser.value === "bacon"){
	  		 sandwichSquared.addTopping(meatPrices.bacon);
	  	} else if(meatChooser.value === "ham"){
	  		 sandwichSquared.addTopping(meatPrices.ham);
	    } else if(meatChooser.value === "chicken"){
	  		 sandwichSquared.addTopping(meatPrices.chicken);
	  	}
	  };
module.exports= {newMeat};