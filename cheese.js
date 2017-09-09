
var SandwichMaker = (function(oldSandwich){
	const cheese = {"Pepperjack": .75, "Cheddar": .75, "Gouda": 1.00, "Provologne": .85, "American": .50};

	oldSandwich.getCheese = function(){
		return cheese;
	}

	let cheeseArray = [];

	//we need a function that pushes the selected cheese into the empty cheeseArray

	oldSandwich.addToCheeseArray = function(selectedCheese){
		cheeseArray.push(selectedCheese);
		return cheeseArray;
	}

	//we need a function that shows the bread array as right now it is only existing within the Sandwich Maker function.

	oldSandwich.showCheeseArray = function(){
		return cheeseArray;
	}

	//we need a function that removes any ingredients that were unchecked

	oldSandwich.removeUncheckedCheeses = function(strang){
		cheeseArray.forEach(function(selectedCheese, index){
		if (selectedCheese === strang){
			cheeseArray.splice(index, 1)
	}
	console.log(cheeseArray);
	});
};
	return oldSandwich;
})(SandwichMaker || {});