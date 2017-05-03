console.log('sandwich.js has loaded');

var Sandwich= (function(maker){
// This SandwichMaker IIFE augments the original one
  var total=0;

  return {
      addTopping: function(total){
        total+= total;
        price.innerHTML= total.toFixed(2);
      }
  }



})(Sandwich || {});