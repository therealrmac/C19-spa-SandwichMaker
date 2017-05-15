"use strict";
// This SandwichMaker IIFE augments the original one
  var totalPrice=0;
var price= document.getElementById('finalPrice');
     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };

module.exports= {addTopping};