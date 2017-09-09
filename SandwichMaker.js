
// let theBread = SandwichMaker.getBread();
// let theCheese = SandwichMaker.getCheese();
// let theCondiments = SandwichMaker.getCondiments();
// let theMeat = SandwichMaker.getMeat();
// let theVeggies = SandwichMaker.getVeggies();

chooseBread = document.getElementById("breads");
chooseCheese = document.getElementById("cheeses");
chooseCondiments = document.getElementById("condiments");
chooseMeat = document.getElementById("meats");
chooseVeggies = document.getElementById("veggies")

// click event to add Meat to array 
chooseMeat.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		SandwichMaker.addToMeatArray(event.target.name);
		SandwichMaker.showMeatArray();
		console.log(SandwichMaker.showMeatArray());
    } else {
    	SandwichMaker.removeUncheckedMeats(event.target.name);
    }
});

//click event to add Bread to array 
chooseBread.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		SandwichMaker.addToBreadArray(event.target.name);
		SandwichMaker.showBreadArray();
		console.log(SandwichMaker.showBreadArray());
    } else {
    	SandwichMaker.removeUncheckedBreads(event.target.name);
    }
});

//click event to add Cheese to array 
chooseCheese.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		SandwichMaker.addToCheeseArray(event.target.name);
		SandwichMaker.showCheeseArray();
		console.log(SandwichMaker.showCheeseArray());
    } else {
    	SandwichMaker.removeUncheckedCheeses(event.target.name);
    }
});

//click event to add Condiments to array 
chooseCondiments.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		SandwichMaker.addToCondimentsArray(event.target.name);
		SandwichMaker.showCondimentsArray();
		console.log(SandwichMaker.showCondimentsArray());
    } else {
    	SandwichMaker.removeUncheckedCondiments(event.target.name);
    }
});

//click event to add Veggies to array 
chooseVeggies.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		SandwichMaker.addToVeggiesArray(event.target.name);
		SandwichMaker.showVeggiesArray();
		console.log(SandwichMaker.showVeggiesArray());
    } else {
    	SandwichMaker.removeUncheckedVeggies(event.target.name);
    }
});


//we need a function to add all of the checked ingredients from different arrays into an empty array called allCheckedSandwichIngredientPrices








