console.log("hello")


// let theBread = SandwichMaker.getBread();
// let theCheese = SandwichMaker.getCheese();
// let theCondiments = SandwichMaker.getCondiments();
// let theMeat = SandwichMaker.getMeat();
// let theVeggies = SandwichMaker.getVeggies();

chooseBread = document.getElementById("bread");
chooseCheese = document.getElementById("cheese");
chooseCondiments = document.getElementById("condiments");
chooseMeat = document.getElementById("meats");
chooseVeggies = document.getElementById("veggies")



// click event to add to array 

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


// .reduce to show the 