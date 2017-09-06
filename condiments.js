var SandwichMaker = (function(oldSandwich){
	const condiments = {"Ketchup": .05, "Mustard": .05, "Sriracha": .05, "Tzasiki": .10, "Relish": .05};

	oldSandwich.getCondiments = function(){
		return condiments;
	}
	return oldSandwich;
})(SandwichMaker || {});


