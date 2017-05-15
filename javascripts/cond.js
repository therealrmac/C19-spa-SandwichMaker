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