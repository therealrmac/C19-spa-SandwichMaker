"use strict";
var price= document.getElementById('finalPrice');
  var totalPrice=0;
  

     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };
  var vegPrice={"lettuce": 0.40, "tomato":0.60, "onion": 0.40, "greenpep": 0.75};
  var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser= document.getElementById('cheese-chooser');
var condimentChooser= document.getElementById('Condiment-chooser');
var vegChooser= document.getElementById('veg-chooser');
var breadChooser= document.getElementById('bread-chooser');
var price= document.getElementById('finalPrice');
  let newVeg= function(event){
  	if(vegChooser.value === "lettuce"){
  		return addTopping(vegPrice.lettuce);
  	}else if(vegChooser.value === "tomato"){
  		return addTopping(vegPrice.tomato);
  	}else if(vegChooser.value === "greenpep"){
  		return addTopping(vegPrice.greenpep);
  	}else if(vegChooser.value === "onion"){
      return addTopping(vegPrice.onion);
    }
  };
module.exports= {newVeg};