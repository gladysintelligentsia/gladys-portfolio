//Activity
const Recipe = require("../models/Recipe");

module.exports.getAll = (req,res) => {

	return Recipe.find()
	.then(recipes => req.status(200).send(recipes))
	.catch(err => req.status(500).send({ error: "Error in Find", details: err}))

}

module.exports.addRecipe = (req,res) => {
    
	let newRecipe = new Recipe({
		name : req.name,
		description : req.description,
		ingredients : req.ingredients,
		steps: req.Steps
	});

	return newRecipe.save()
	.then((Recipe) => res.status(201).send(Recipe))
	.catch(err => res.status(500).send({ error: "Error in Save", details: err}));
}


