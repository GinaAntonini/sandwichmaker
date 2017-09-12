
var SandwichMaker = (function(oldSandwich){
	const bread = {"Wheat": 1, "White": 1, "Four Cheese": 1, "Sprouted": 2, "Five Grain": 2};

	oldSandwich.getBread = function(){
		return bread
	}

	//we need a function that pushes the selected bread into the empty sandwich array

	oldSandwich.addToBreadArray = function(selectedBread){
		return {name: selectedBread, price: bread[selectedBread]};
	}

	//we need a function that returns the price of the selected bread

	oldSandwich.getBreadPrice = function(){
        return bread[value];
    }

	return oldSandwich;
})(SandwichMaker || {});
