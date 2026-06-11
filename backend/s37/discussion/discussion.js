// CRUD Operations
// CRUD stands for Create, Read, Update, and Delete
// These operations are the foundation of any backend application

// CREATE

// insertOne()
// Used to insert a single document into a collection.

/*
SYNTAX:
db.collectionName.insertOne({ key: value });
*/

db.users.insertOne(
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "87654321",
            email: "janedoe@gmail.com"
        },
        courses: ["CSS", "JavaScript", "Python"],
        department: "none"
    }
);

// insertMany()
// Used to insert a multiple documents into a collection.

/*
SYNTAX:
db.collectionName.insertMany([{ key: value }, { key: value }]);
*/

db.users.insertMany([

    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@gmail.com"
        },
        courses: ["Python", "React", "PHP"],
        department: "none"
    },
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@gmail.com"
        },
        courses: ["React", "Laravel", "Sass"],
        department: "none"
    }
]);

// READ

// findOne()
// Retrieves a single document from a collection.
/*
SYNTAX:
db.collectionName.findOne();
db.collectionName.findOne({ field: value });
*/

db.users.findOne();

// With filter
db.users.findOne({ firstName: "Stephen" });

// find()
// find() Retrieves multiple documents from a collection.
// find() returns all documents that match the query.

/*
SYNTAX:
db.collectionName.find({ field: value });
*/

db.users.find({ department: "none" });

// Find documents that match multiple conditions
// All conditions must be satisfied - implicit AND
db.users.find({ department: "none", age: 82 });

// UPDATE

// updateOne()
// Updates a single document that matches the given condition

/*
SYNTAX:
db.collectionName.updateOne({ field: value }, { $set: { field: value } });
*/

db.users.insertOne(

    {
        firstName: "Test",
        lastName: "Test",
        age: 0,
        contact: {
            phone: "00000000",
            email: "test@gmail.com"
        },
        courses: [],
        department: "none"
    }

);

// Only the FIRST matching document will be updated
db.users.updateOne(
    // criteria
    {firstName: "Test"},
    {
        // set the updated values
        $set: {
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "12345678",
                email: "bill@gmail.com"
            },
            courses: ["PHP", "Laravel", "HTML"],
            department: "Operations"
        }
    }
);

// updateMany()
// Updates all documents that match the given condition.

/*
SYNTAX:
db.collectionName.updateMany({ field: value }, { $set: { field: value } });
*/

db.users.updateMany(

    {department: "none"},
    {
        $set: { department: "HR"}
    }
);

// Query Operators
// Query operators are special symbols/keywords (usually starting with $) used in MongoDB to filter or search data.

// Comparison Query Operators

// Finds documents where the field value is greater than or equal to a specified value

/*
SYNTAX:
db.collectionName.find({ field: { $gt: value } });
db.collectionName.find({ field: { $gte: value } });
*/

db.users.find ({ age: {$gt: 65} });
db.users.find ({ age: {$gte: 65} });

// Finds documents where the field value is less than or equal to a specified value

/*
SYNTAX:
db.collectionName.find({ field: { $lt: value } });
db.collectionName.find({ field: { $lte: value } });
*/

db.users.find ({ age: {$lt: 65} });
db.users.find ({ age: {$lte: 65} });

// Finds documents where the field value is NOT equal to the specified value

/*
SYNTAX:
db.collectionName.find({ field: { $ne: value } });
*/

db.users.find({ age: {$ne: 82} });

// In Operator
// Finds documents where the field matches any value in the given array

/*
SYNTAX:
db.collectionName.find({ field: { $in: [value1, value2] } });
*/

db.users.find({ lastName: { $in: ["Hawking", "Doe"] } });

db.users.find({courses: {$in: ["HTML", "React"]} });

// Or Operator
// Finds documents that match at least one of the given conditions

/*
SYNTAX:
db.collectionName.find({
    $or: [
        { fieldA: valueA },
        { fieldB: valueB }
    ]
});
*/

db.users.find({
    $or: [
        {firstName: "Neil"},
        {age: 25}
    ]
});

db.users.find({
    $or: [
        {firstName: "Neil"},
        {age: {$gt: 30}}
    ]
});

// Finds documents that match all of the given conditions.

/*
SYNTAX:
db.collectionName.find({
    $and: [
        { fieldA: valueA },
        { fieldB: valueB }
    ]
});
*/

db.users.find({
    $and: [
        {firstName: "Bill"},
        {age: 65}
    ]
});

db.users.find({
    $and: [
        {firstName: "Jane"},
        {age: {$gt: 30}}
    ]
});

// Field Projection
// Include only specified fields (value = 1)

/*
SYNTAX:
db.collectionName.find({ criteria }, { field: 1 });
*/

db.users.find(
    {firstName: "Jane"},
    {
        firstName: 1,
        lastName: 1,
        contact: 1
    }
);

// Exclude specified fields (value = 0)

/*
SYNTAX:
db.collectionName.find({ criteria }, { field: 0 });
*/

db.users.find(
    {firstName: "Jane"},
    {
        lastName: 0,
        contact: 0
    }
);

// Exclude the _id field from the result
/*
SYNTAX:
db.collectionName.find({ criteria }, { _id: 0 });
*/

db.users.find(
    {firstName: "Jane"},
    {
        firstName: 1,
        lastName: 1,
        contact: 1,
        _id: 0
    }
);

// Regex (Regular Expression) Operator

// Finds documents that match a specified pattern

/*
SYNTAX:
db.collectionName.find({
    field: { $regex: "pattern", $options: "options" }
});
*/

db.users.find({
    firstName: { $regex: "J" }
});

// "i" option makes the search ignore case
// i - ignore (case)
db.users.find({
    firstName: { $regex: "J", $options: "i" }
});

