
var SandwichMaker = (function(oldSandwich){
	const cheese = {"Pepperjack": 1, "Cheddar": 1, "Gouda": 1, "Provologne": 1, "American": 1};

	oldSandwich.getCheese = function(){
		return cheese;
	}

	//we need a function that pushes the selected cheese into the empty sandwich array

	oldSandwich.addToCheeseArray = function(selectedCheese){
		return {name: selectedCheese, price: cheese[selectedCheese]};
	}

	//we need a function that returns the price of the selected bread

	oldSandwich.getCheesePrice = function(name) {
        
    }

	return oldSandwich;
})(SandwichMaker || {});