var SandwichMaker = (function(oldSandwich){
	const veggies = {"Lettuce": 0, "Onion": 1, "Green Peppers": 1, "Cucumber": 1, "Avocado": 2};

	oldSandwich.getVeggies= function(){
		return veggies;
	}

	//we need a function that pushes the selected veggies into the empty sandwich array

	oldSandwich.addToVeggiesArray = function(selectedVeggies){
		return {name: selectedVeggies, price: veggies[selectedVeggies]};
	}

	//we need a function that returns the price of the selected condiments

	oldSandwich.getVeggiesPrice = function(name) {
        return veggies[name];
    }
	return oldSandwich;
})(SandwichMaker || {});