"use strict";
var price= document.getElementById('finalPrice');
  var totalPrice=0;
 

     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };
	 var breadPrice={"white": 1.00, "wheat": 1.20,"itallian":1.60,"flatbread": 1.80};
var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser= document.getElementById('cheese-chooser');
var condimentChooser= document.getElementById('Condiment-chooser');
var vegChooser= document.getElementById('veg-chooser');
var breadChooser= document.getElementById('bread-chooser');
var price= document.getElementById('finalPrice');
	 let newBread= function(event){
	 	if(breadChooser.value=== "white"){
	 		return addTopping(breadPrice.white);
	 	}else if(breadChooser.value === "wheat"){
	 		return addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "itallian"){
	 		return addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "flatbread"){
	 		return addTopping(breadPrice.flatbread);
	 	}
	 };

module.exports= {newBread};