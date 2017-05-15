(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
  let sandwichSquared= require("./sandwich");
var breadChooser= document.getElementById('bread-chooser');

	 var breadPrice={"white": 1.00, "wheat": 1.20,"itallian":1.60,"flatbread": 1.80};
	 let newBread= function(event){
	 	if(breadChooser.value=== "white"){
	 		 sandwichSquared.addTopping(breadPrice.white);
	 	}else if(breadChooser.value === "wheat"){
	 		 sandwichSquared.addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "itallian"){
	 		 sandwichSquared.addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "flatbread"){
	 		 sandwichSquared.addTopping(breadPrice.flatbread);
	 	}
	 };

module.exports= {newBread};
},{"./sandwich":6}],2:[function(require,module,exports){
"use strict";
  let sandwichSquared= require("./sandwich");
  var cheeseChooser= document.getElementById('cheese-chooser');
	  var cheesePrices={"swiss":0.80, "cheddar": 1.15, "provalone":1.30,"meunster":1.50};
	  var selectedTopping;
	  let newCheese= function(event){
	  	if(cheeseChooser.value=== "swiss"){
	  		 sandwichSquared.addTopping(cheesePrices.swiss);
	  	} else if(cheeseChooser.value === "cheddar"){
	  		 sandwichSquared.addTopping(cheesePrices.cheddar);
	  	} else if(cheeseChooser.value === "provalone"){
	  		 sandwichSquared.addTopping(cheesePrices.provalone);
	    } else if(cheeseChooser.value === "meunster"){
	  		 sandwichSquared.addTopping(cheesePrices.meunster);
	  	}
	  };

module.exports= {newCheese};
},{"./sandwich":6}],3:[function(require,module,exports){
"use strict";
  let sandwichSquared= require("./sandwich");
var condimentChooser= document.getElementById('Condiment-chooser');
	var condPrice={"mayo":0.00,"mustard":0.00,"ranch":0.00,"honeymustard":0.00,};
	let newCond= function(event){
		if(condimentChooser.value === "mayo"){
			  sandwichSquared.addTopping(condPrice.mayo);
		}else if(condimentChooser.value === "mustard"){
			  sandwichSquared.addTopping(condPrice.mustard);
		}else if(condimentChooser.value === "ranch"){
			  sandwichSquared.addTopping(condPrice.ranch);
		}else if(condimentChooser.value === "honeymustard"){
			  sandwichSquared.addTopping(condPrice.honeymustard);
		}
	};

module.exports= {newCond};
},{"./sandwich":6}],4:[function(require,module,exports){
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



},{"./bread":1,"./cheese":2,"./cond":3,"./meat":5,"./veg":7}],5:[function(require,module,exports){
"use strict"; 
  let sandwichSquared= require("./sandwich");
var meatChooser = document.getElementById("meat-chooser");
	var meatPrices={"turkey": 0.90, "bacon": 1.50, "ham":1.25,"chicken":1.10};
	var selectedTopping;
	let newMeat= function(event){
		console.log(event);
		if(meatChooser.value=== "turkey"){
	  		sandwichSquared.addTopping(meatPrices.turkey);
	  	} else if(meatChooser.value === "bacon"){
	  		 sandwichSquared.addTopping(meatPrices.bacon);
	  	} else if(meatChooser.value === "ham"){
	  		 sandwichSquared.addTopping(meatPrices.ham);
	    } else if(meatChooser.value === "chicken"){
	  		 sandwichSquared.addTopping(meatPrices.chicken);
	  	}
	  };
module.exports= {newMeat};
},{"./sandwich":6}],6:[function(require,module,exports){
"use strict";
// This SandwichMaker IIFE augments the original one
  var totalPrice=0;
var price= document.getElementById('finalPrice');
     let addTopping= function(total){
        totalPrice+= total;
        price.innerHTML= "Total Price: " +totalPrice.toFixed(2);
      };

module.exports= {addTopping};
},{}],7:[function(require,module,exports){
"use strict";
  let sandwichSquared= require("./sandwich");
  var vegChooser= document.getElementById('veg-chooser');

  var vegPrice={"lettuce": 0.40, "tomato":0.60, "onion": 0.40, "greenpep": 0.75};
  let newVeg= function(event){
  	if(vegChooser.value === "lettuce"){
  		 sandwichSquared.addTopping(vegPrice.lettuce);
  	}else if(vegChooser.value === "tomato"){
  		 sandwichSquared.addTopping(vegPrice.tomato);
  	}else if(vegChooser.value === "greenpep"){
  		  sandwichSquared.addTopping(vegPrice.greenpep);
  	}else if(vegChooser.value === "onion"){
        sandwichSquared.addTopping(vegPrice.onion);
    }
  };
module.exports= {newVeg};
},{"./sandwich":6}]},{},[4]);
