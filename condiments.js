var SandwichMaker = (function(oldSandwich){
	const condiments = {"Ketchup": .05, "Mustard": .05, "Sriracha": .05, "Tzasiki": .10, "Relish": .05};

	oldSandwich.getCondiments = function(){
		return condiments;
	}

	let condimentsArray = [];

	//we need a function that pushes the selected condiments into the empty condimentsArray

	oldSandwich.addToCondimentsArray = function(selectedCondiments){
		condimentsArray.push(selectedCondiments);
		return condimentsArray;
	}

	//we need a function that shows the condiments array as right now it is only existing within the Sandwich Maker function.

	oldSandwich.showCondimentsArray = function(){
		return condimentsArray;
	}

	//we need a function that removes any ingredients that were unchecked

	oldSandwich.removeUncheckedCondiments = function(strang){
		condimentsArray.forEach(function(selectedCondiments, index){
		if (selectedCondiments === strang){
			condimentsArray.splice(index, 1)
	}
	console.log(condimentsArray);
	});
};
	return oldSandwich;
})(SandwichMaker || {});

