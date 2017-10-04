# Sandwich Maker

#### Requirements for Sandwich Maker:

##### 1. Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

- [x] bread
- [x] meat
- [x] cheese
- [x] condiments
- [x] veggies

##### 2. Your project should have one HTML file that has:

- [x] A section of options for each sandwich part
- [x] The ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
- [x] An empty DOM element into which the final sandwich order and its cost will be inserted
- [x] The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}
- [x] Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

##### 3. Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user.

##### 4. You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

##### 5. Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. Additionally, put a select element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.  For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

- [x] The two JSON representations above should be in two files: products.json, and categories.json. You should load both files via XHRs and store the contents in two different JavaScript variables in your code.

##


### Contributors:

 * [Gina Antonini](https://github.com/ginaantonini)

