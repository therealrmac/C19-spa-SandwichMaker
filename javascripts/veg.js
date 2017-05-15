"use strict";
  let sandwichSquared= require("./sandwich");
  var vegChooser= document.getElementById('veg-chooser');

  var vegPrice={"lettuce": 0.40, "tomato":0.60, "onion": 0.40, "greenpep": 0.75};
  let newVeg= function(event){
  	if(vegChooser.value === "lettuce"){
  		 sandwichSquared.addTopping(vegPrice.lettuce);
  	}else if(vegChooser.value === "tomato"){
  		 sandwichSquared.addTopping(vegPrice.tomato);
  	}else if(vegChooser.value === "greenpep"){
  		  sandwichSquared.addTopping(vegPrice.greenpep);
  	}else if(vegChooser.value === "onion"){
        sandwichSquared.addTopping(vegPrice.onion);
    }
  };
module.exports= {newVeg};