var SandwichMaker = (function(oldSandwich){
	const meat = {"Turkey": 4.50, "Pastor": 7.00, "Carnitas": 3.50, "Steak": 2.50, "Chicken": 3.00};

	oldSandwich.getMeat = function(){
		return meat;
	}
	//we need an empty array to hold the meats that have been checked

	let meatArray = [];

	//we need a function that pushes the selected meat into the empty meatArray

	oldSandwich.addToMeatArray = function(selectedMeat){
		meatArray.push(selectedMeat);
		return meatArray;
	}

	//we need a function that shows the meat array as right now it is only existing within the Sandwich Maker function.

	oldSandwich.showMeatArray = function(){
		return meatArray;
	}

	//we need an event listener that makes the checkboxes work on the page...this is on the SandwichMaker.js file

	//we need a function that removes any ingredients that were unchecked

	oldSandwich.removeUncheckedMeats = function(strang){
		meatArray.forEach(function(selectedMeat, index){
		if (selectedMeat === strang){
			meatArray.splice(index, 1)
	}
	console.log(meatArray);
	});
};
	return oldSandwich;
})(SandwichMaker || {});


