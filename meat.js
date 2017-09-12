var SandwichMaker = (function(oldSandwich){
	const meat = {"Turkey": 4, "Pastor": 7, "Carnitas": 3, "Steak": 2, "Chicken": 3};

	oldSandwich.getMeat = function(){
		return meat;
	}

	//we need a function that pushes the selected meat into the empty sandwich array

	oldSandwich.addToMeatArray = function(selectedMeat){
		return {name: selectedMeat, price: meat[selectedMeat]};
	}

	//we need a function that returns the price of the selected condiments

	oldSandwich.getMeatPrice = function(name) {
        return condiments[name];
    }

	return oldSandwich;
})(SandwichMaker || {});


