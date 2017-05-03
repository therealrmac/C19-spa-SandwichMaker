console.log('bread has loaded');
var Sandwich= (function(bread){
	 var breadPrice={"white": 1.00, "wheat": 1.20,"itallian":1.60,"flatbread": 1.80};

	 bread.newBread= function(event){
	 	if(breadChooser.value=== "white"){
	 		return Sandwich.addTopping(breadPrice.white);
	 	}else if(breadChooser.value === "wheat"){
	 		return Sandwich.addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "itallian"){
	 		return Sandwich.addTopping(breadPrice.wheat);
	 	}else if(breadChooser.value === "flatbread"){
	 		return Sandwich.addTopping(breadPrice.flatbread);
	 	}
	 }
	 return bread;

})(Sandwich || {});