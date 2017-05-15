"use strict";
	var price= document.getElementById('finalPrice');
  var totalPrice=0;

  
     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };
	  var cheesePrices={"swiss":0.80, "cheddar": 1.15, "provalone":1.30,"meunster":1.50};
	  var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser= document.getElementById('cheese-chooser');
var condimentChooser= document.getElementById('Condiment-chooser');
var vegChooser= document.getElementById('veg-chooser');
var breadChooser= document.getElementById('bread-chooser');
var price= document.getElementById('finalPrice');
	  let newCheese= function(event){
	  	if(cheeseChooser.value=== "swiss"){
	  		return addTopping(cheesePrices.swiss);
	  	} else if(cheeseChooser.value === "cheddar"){
	  		return addTopping(cheesePrices.cheddar);
	  	} else if(cheeseChooser.value === "provalone"){
	  		return addTopping(cheesePrices.provalone);
	    } else if(cheeseChooser.value === "meunster"){
	  		return addTopping(cheesePrices.meunster);
	  	}
	  };

module.exports= {newCheese};