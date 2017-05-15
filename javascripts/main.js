"use strict";
console.log("main.js had loaded");
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser= document.getElementById('cheese-chooser');
var condimentChooser= document.getElementById('Condiment-chooser');
var vegChooser= document.getElementById('veg-chooser');
var breadChooser= document.getElementById('bread-chooser');
var price= document.getElementById('finalPrice');
let sandwichMeat= require("./meat");
let sandwichCheese= require("./cheese");
let sandwichCond= require("./cond");
let sandwichVeg= require("./veg");
let sandwichBread= require("./bread");
let sandwichSquared= require("./sandwich");

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  console.log(selectedTopping);
  sandwichMeat.newMeat(selectedTopping);

});
breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
sandwichBread.newBread(selectedTopping);
});
vegChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
 sandwichVeg.newVeg(selectedTopping);

});
condimentChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  sandwichCond.newCond(selectedTopping);

});
cheeseChooser.addEventListener("change", function(event) {

  selectedTopping = event.target.value;
  sandwichCheese.newCheese(selectedTopping);
});


