var SandwichMaker = (function(oldSandwich){
	const veggies = {"Lettuce": .04, "Onion": .10, "Green Peppers": .50, "Cucumber": .75, "Avocado": 1.00};

	oldSandwich.getVeggies= function(){
		return veggies;
	}
	return oldSandwich;
})(SandwichMaker || {});


