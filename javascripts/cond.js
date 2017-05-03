console.log('condiment has loaded');
var Sandwich= (function(cond){
	var condPrice={"mayo":0.00,"mustard":0.00,"ranch":0.00,"honeymustard":0.00,};
	cond.newCond= function(event){
		if(condimentChooser.value === "mayo"){
			return Sandwich.addTopping(condPrice.mayo);
		}else if(condimentChooser.value === "mustard"){
			return Sandwich.addTopping(condPrice.mustard);
		}else if(condimentChooser.value === "ranch"){
			return Sandwich.addTopping(condPrice.ranch);
		}else if(condimentChooser.value === "honeymustard"){
			return Sandwich.addTopping(condPrice.honeymustard);
		}
	}

	return cond;
})(Sandwich || {});