console.log("DOMHandler.js had loaded");
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

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  console.log(selectedTopping);
  Sandwich.newMeat(selectedTopping, extraMeat);

});
breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  Sandwich.newBread(selectedTopping);
});
vegChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  Sandwich.newVeg(selectedTopping);

});
condimentChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  Sandwich.newCond(selectedTopping);

});
cheeseChooser.addEventListener("change", function(event) {

  selectedTopping = event.target.value;
  Sandwich.newCheese(selectedTopping);
});


