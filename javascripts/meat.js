"use strict";
var price= document.getElementById('finalPrice');
  var totalPrice=0;
  

     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };
	var meatPrices={"turkey": 0.90, "bacon": 1.50, "ham":1.25,"chicken":1.10};
	var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser= document.getElementById('cheese-chooser');
var condimentChooser= document.getElementById('Condiment-chooser');
var vegChooser= document.getElementById('veg-chooser');
var breadChooser= document.getElementById('bread-chooser');
var price= document.getElementById('finalPrice');
	let newMeat= function(event){
		console.log(event);
		if(meatChooser.value=== "turkey"){
	  		return addTopping(meatPrices.turkey);
	  	} else if(meatChooser.value === "bacon"){
	  		return addTopping(meatPrices.bacon);
	  	} else if(meatChooser.value === "ham"){
	  		return addTopping(meatPrices.ham);
	    } else if(meatChooser.value === "chicken"){
	  		return addTopping(meatPrices.chicken);
	  	}
	  };
module.exports= {newMeat};