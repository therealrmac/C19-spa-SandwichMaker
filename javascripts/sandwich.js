console.log('sandwich.js has loaded');

var Sandwich= (function(maker){
// This SandwichMaker IIFE augments the original one
  var totalPrice=0;

	return{ 
      addTopping: function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      }
};

return maker;
})(Sandwich || {});