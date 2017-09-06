
var SandwichMaker = (function(oldSandwich){
	const cheese = {"Pepperjack": .75, "Cheddar": .75, "Gouda": 1.00, "Provologne": .85, "American": .50};

	oldSandwich.getCheese = function(){
		return cheese;
	}
	return oldSandwich;
})(SandwichMaker || {});


