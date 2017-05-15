"use strict";
var price= document.getElementById('finalPrice');
  var totalPrice=0;

 
     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };
	var condPrice={"mayo":0.00,"mustard":0.00,"ranch":0.00,"honeymustard":0.00,};
	var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser= document.getElementById('cheese-chooser');
var condimentChooser= document.getElementById('Condiment-chooser');
var vegChooser= document.getElementById('veg-chooser');
var breadChooser= document.getElementById('bread-chooser');
var price= document.getElementById('finalPrice');
	let newCond= function(event){
		if(condimentChooser.value === "mayo"){
			return addTopping(condPrice.mayo);
		}else if(condimentChooser.value === "mustard"){
			return addTopping(condPrice.mustard);
		}else if(condimentChooser.value === "ranch"){
			return addTopping(condPrice.ranch);
		}else if(condimentChooser.value === "honeymustard"){
			return addTopping(condPrice.honeymustard);
		}
	};

module.exports= {newCond};