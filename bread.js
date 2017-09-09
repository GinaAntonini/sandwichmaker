
var SandwichMaker = (function(oldSandwich){
	const bread = {"Wheat": 1.05, "White": 1.25, "Four Cheese": 1.75, "Sprouted": 2.25, "Five Grain": 2.50};

	oldSandwich.getBread = function(){
		return bread;
	}

	let breadArray = [];

	//we need a function that pushes the selected bread into the empty breadArray

	oldSandwich.addToBreadArray = function(selectedBread){
		breadArray.push(selectedBread);
		return breadArray;
	}

	//we need a function that shows the bread array as right now it is only existing within the Sandwich Maker function.

	oldSandwich.showBreadArray = function(){
		return breadArray;
	}

	return oldSandwich;
})(SandwichMaker || {});


