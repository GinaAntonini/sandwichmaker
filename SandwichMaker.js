
let theBread = SandwichMaker.getBread();
let theCheese = SandwichMaker.getCheese();
let theCondiments = SandwichMaker.getCondiments();
let theMeat = SandwichMaker.getMeat();
let theVeggies = SandwichMaker.getVeggies();

chooseBread = document.getElementById("breads");
chooseCheese = document.getElementById("cheeses");
chooseCondiments = document.getElementById("condiments");
chooseMeat = document.getElementById("meats");
chooseVeggies = document.getElementById("veggies")
finishedSandwich = document.getElementById("finalSandwichOrder");
addButton = document.getElementById("additionButton");

let theWholeSandwich = [];

// click event to add Meat to array 
chooseMeat.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		theWholeSandwich.push(SandwichMaker.addToMeatArray(event.target.value));
    } else {
    	SandwichMaker.removeUncheckedIngredients(event.target.value);
    }
});

//click event to add Bread to array 
chooseBread.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		theWholeSandwich.push(SandwichMaker.addToBreadArray(event.target.value));
    } else {
    	SandwichMaker.removeUncheckedIngredients(event.target.value);
    }
});

//click event to add Cheese to array 
chooseCheese.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		theWholeSandwich.push(SandwichMaker.addToCheeseArray(event.target.value))
    } else {
    	SandwichMaker.removeUncheckedIngredients(event.target.value);
    }
});

//click event to add Condiments to array 
chooseCondiments.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		theWholeSandwich.push(SandwichMaker.addToCondimentsArray(event.target.value))
    } else {
    	SandwichMaker.removeUncheckedIngredients(event.target.value);
    }
});

//click event to add Veggies to array 
chooseVeggies.addEventListener("change", function(event){
	console.log(event);
	if(event.target.checked === true) {
		theWholeSandwich.push(SandwichMaker.addToVeggiesArray(event.target.value))
    } else {
    	SandwichMaker.removeUncheckedIngredients(event.target.value);
    }
});

//we need a function to add all of the checked ingredients from different arrays into an empty array called theWholeSandwich
SandwichMaker.addToSandwichArray = function(selectedIngredients){
		theWholeSandwich.push(selectedIngredients);

	}

//we need a function to remove any ingredients that become unchecked
SandwichMaker.removeUncheckedIngredients = function(strang){
		theWholeSandwich.forEach(function(selectedIngredients, index){
		if (selectedIngredients === strang){
			theWholeSandwich.splice(index, 1)
		}
	// console.log(theWholeSandwich);
	});
	};

//we need a function that prints the theWholeSandwich array with prices to the dom and also need an event listener that makes the Add It All Up button work
additionButton.addEventListener("click", function(event){
	finalPrice = 0;
	toppingList = ""
theWholeSandwich.forEach(function(topping){
	finalPrice += topping.price;
	toppingList += topping.name + "<p></p> ";
})
	finishedSandwich.innerHTML = `<h4>Pay This Amount: $ ${finalPrice}</h4><p>Final Order:<p></p> ${toppingList}</p>`;
});





