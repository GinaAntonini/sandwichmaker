var SandwichMaker = (function(oldSandwich){
	const meat = {"Turkey": 4.50, "Pastor": 7.00, "Carnitas": 3.50, "Steak": 2.50, "Chicken": 3.00};

	oldSandwich.getMeat = function(){
		return meat;
	}
	return oldSandwich;
})(SandwichMaker || {});


