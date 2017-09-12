var SandwichMaker = (function(oldSandwich){
	const condiments = {"Ketchup": 0, "Mustard": 0, "Sriracha": 0, "Tzasiki": 0, "Relish": 0};

	oldSandwich.getCondiments = function(){
		return condiments;
	}

	//we need a function that pushes the selected condiments into the empty sandwich array

	oldSandwich.addToCondimentsArray = function(selectedCondiments){
		return {name: selectedCondiments, price: condiments[selectedCondiments]};
	}

	//we need a function that returns the price of the selected condiments

	oldSandwich.getCondimentsPrice = function(name) {
        return condiments[name];
    }

	return oldSandwich;
})(SandwichMaker || {});

