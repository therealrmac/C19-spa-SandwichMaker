console.log('meat.js has loaded');
var Sandwich= (function(meat){
	console.log(meat);
	var meatPrices={"turkey": 0.90, "bacon": 1.50, "ham":1.25,"chicken":1.10};
	meat.newMeat= function(event){
		console.log(event);
		if(meatChooser.value=== "turkey"){
	  		return Sandwich.addTopping(meatPrices.turkey);
	  	} else if(meatChooser.value === "bacon"){
	  		return Sandwich.addTopping(meatPrices.bacon);
	  	} else if(meatChooser.value === "ham"){
	  		return Sandwich.addTopping(meatPrices.ham);
	    } else if(meatChooser.value === "chicken"){
	  		return Sandwich.addTopping(meatPrices.chicken);
	  	}
	  }
	
	  return meat;
})(Sandwich || {});