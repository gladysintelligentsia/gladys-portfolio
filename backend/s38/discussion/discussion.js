// Documents to use for the discussion

db.fruits.insertMany([
    {
        name : "Apple",
        color : "Red",
        stock : 20,
        price: 40,
        supplier_id : 1,
        onSale : true,
        origin: [ "Philippines", "US" ]
    },

    {
        name : "Banana",
        color : "Yellow",
        stock : 15,
        price: 20,
        supplier_id : 2,
        onSale : true,
        origin: [ "Philippines", "Ecuador" ]
    },

    {
        name : "Kiwi",
        color : "Green",
        stock : 25,
        price: 50,
        supplier_id : 1,
        onSale : true,
        origin: [ "US", "China" ]
    },

    {
        name : "Mango",
        color : "Yellow",
        stock : 10,
        price: 120,
        supplier_id : 2,
        onSale : false,
        origin: [ "Philippines", "India" ]
    }
]);

// Aggregation
// Aggregation is a framework for processing and transforming data in MongoDB collections to generate computed results through a sequence of pipeline stages.

// aggregate() method
// Used to process data in a collection using a pipeline of stages to produce computed results.

/*
SYNTAX:
db.collection.aggregate([
    { <stage1> },
    { <stage2> },
    ...
])
*/

// You can choose which stages to use, you can arrange them in different ways
// You can customize your aggregation pipeline based on your needs

// Get the total stock per supplier for fruits that are on sale.
db.fruits.aggregate([

    // Stage 1
    // $match: filters documents (onSale = true)
    { $match: {onSale: true} },

    // Stage 2
    // $group: groups supplier_id and sums stock
    {
        $group: {
            // _id - special field use to group (grouping logic)
            // $supplier_id - refers to the value of the field
            _id: "$supplier_id",
            // $stock - refers to the value of the field (stores calculation result)
            total: {$sum: "$stock"}
        }
    },

    // Stage 3: Formats output by excluding _id field
    // 0 - means excluded
    { $project: {_id: 0} },

    // Stage 4
    // $sort: sorts documents based on a field
    // -1 means descending (highest to lowest)
    // 1 means ascending (lowest to highest)
    { $sort: {total: 1} }

]);

// Aggregating results based on array fields

// $unwind splits an array field into separate documents
// Each element in "origin" becomes its own document

// Get each fruit and list all its origin countries as separate entries.

/*
SYNTAX:
    db.collection.aggregate([
        { $unwind: "$arrayField" }
    ])
*/

db.fruits.aggregate([
    { $unwind: "$origin"}
]);

// Count how many fruits come from each country of origin.

db.fruits.aggregate([
    { $unwind: "$origin"},

    {
        $group: {
            // Group all documents based on their origin value
            _id: "$origin",
            // kinds - new field that stores the result
            // {$sum: 1} is used to count how many documetns are in each country
            kinds: {$sum: 1}
        }
    }
]);