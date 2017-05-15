"use strict";
  let sandwichSquared= require("./sandwich");
var breadChooser= document.getElementById('bread-chooser');

	 var breadPrice={"white": 1.00, "wheat": 1.20,"itallian":1.60,"flatbread": 1.80};
	 let newBread= function(event){
	 	if(breadChooser.value=== "white"){
	 		 sandwichSquared.addTopping(breadPrice.white);
	 	}else if(breadChooser.value === "wheat"){
	 		 sandwichSquared.addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "itallian"){
	 		 sandwichSquared.addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "flatbread"){
	 		 sandwichSquared.addTopping(breadPrice.flatbread);
	 	}
	 };

module.exports= {newBread};