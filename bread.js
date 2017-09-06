
var SandwichMaker = (function(oldSandwich){
	const bread = {"Wheat": 1.05, "White": 1.25, "Four Cheese": 1.75, "Sprouted": 2.25, "Five Grain": 2.50};

	oldSandwich.getBread = function(){
		return bread;
	}
	return oldSandwich;
})(SandwichMaker || {});


