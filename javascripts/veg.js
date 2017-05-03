console.log('veg has loaded');
var Sandwich= (function(veg){
	
  var vegPrice={"lettuce": 0.40, "tomato":0.60, "onion": 0.40, "greenpep": 0.75};
  veg.newVeg= function(event){
  	if(vegChooser.value === "lettuce"){
  		return Sandwich.addTopping(vegPrice.lettuce);
  	}else if(vegChooser.value === "tomato"){
  		return Sandwich.addTopping(vegPrice.tomato);
  	}else if(vegChooser.value === "greenpep"){
  		return Sandwich.addTopping(vegPrice.greenpep);
  	}else if(vegChooser.value === "onion"){
      return Sandwich.addTopping(vegPrice.onion);
    }
  }

  return veg;
})(Sandwich || {});