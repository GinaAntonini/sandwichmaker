var SandwichMaker = (function(oldSandwich){
	const veggies = {"Lettuce": .04, "Onion": .10, "Green Peppers": .50, "Cucumber": .75, "Avocado": 1.00};

	oldSandwich.getVeggies= function(){
		return veggies;
	}

	let veggiesArray = [];

	//we need a function that pushes the selected veggies into the empty veggiesArray

	oldSandwich.addToVeggiesArray = function(selectedVeggies){
		veggiesArray.push(selectedVeggies);
		return veggiesArray;
	}

	//we need a function that shows the veggies array as right now it is only existing within the Sandwich Maker function.

	oldSandwich.showVeggiesArray = function(){
		return veggiesArray;
	}

	//we need a function that removes any ingredients that were unchecked

	oldSandwich.removeUncheckedVeggies = function(strang){
		veggiesArray.forEach(function(selectedVeggies, index){
		if (selectedVeggies === strang){
			veggiesArray.splice(index, 1)
	}
	console.log(veggiesArray);
	});
};
	return oldSandwich;
})(SandwichMaker || {});