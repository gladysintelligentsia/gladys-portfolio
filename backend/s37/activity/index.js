async function addOneFunc(db) {
    await (
        db.collection("rooms").insertOne({
            name: "single",
            accommodates: 2,
            price: 1000,
            description: "A simple room with all the basic necessities",
            rooms_available: 10,
            isAvailable: true
        })
    );

    return (db);
};

async function addManyFunc(db) {
    await (
        db.collection("rooms").insertMany([
            {
                name: "double",
                accommodates: 3,
                price: 2000,
                description: "A room fit for a small family going on a vacation",
                rooms_available: 5,
                isAvailable: true
            },
            {
                name: "queen",
                accommodates: 4,
                price: 4000,
                description: "A room with a queen sized bed perfect for a simple getaway",
                rooms_available: 15,
                isAvailable: true
            },
            {
                name: "executive suites",
                accommodates: 4,
                price: 9000,
                description: "A room designed with more space for work and relaxation",
                rooms_available: 2,
                isAvailable: true
            },
            {
                name: "deluxe king",
                accommodates: 4,
                price: 7000,
                description: "A room with a king-sized bed and a comfortable couch for the modern traveler.",
                rooms_available: 4,
                isAvailable: true
            }
        ])
    );

    return (db);
};

async function findRoom(db) {
    return await (
        db.collection("rooms").findOne({ name: "double" })
    );
};

function updateOneFunc(db) {
    db.collection("rooms").updateOne(
        { name: "queen" },
        { $set: { rooms_available: 0 } }
    )
};

async function replaceOneFunc(db) {
    await (
        db.collection("rooms").replaceOne(
            { name: "queen" },
            {
                name: "queen",
                accommodates: 4,
                price: 4000,
                description: "A room with a queen sized bed perfect for a simple getaway",
                rooms_available: 0,
                isAvailable: false
            }
        )
    );
}

async function findOneAndUpdateFunc(db) {
    await (
        db.collection("rooms").findOneAndUpdate(
            { name: "queen" },
            { $set: { isAvailable: false } }
        )
    );

    return (db)
}

async function deleteOneFunc(db) {
    await (
        db.collection("rooms").deleteOne({ name: "executive suites" })
    );
}

function deleteManyFunc(db) {
    db.collection("rooms").deleteMany({ rooms_available: 0 })
};

async function findOneAndDeleteFunc(db) {
    return await (
        db.collection("rooms").findOneAndDelete({ name: "single" })
    );
}

async function findName(db) {
    return await (
        db.collection("rooms").find(
            { $or: [{ name: { $regex: "s", $options: "i" } }, { name: { $regex: "t", $options: "i" } }] },
            { projection: { name: 1, description: 1, _id: 0 } }
        ).toArray()
    );
};

async function findAccom(db) {
    return await (
        db.collection("rooms").find({
            $and: [
                { accommodates: { $gt: 2 } },
                { price: { $lte: 7000 } }
            ]
        }).toArray()
    );
};

async function findNamePrice(db) {
    return await (
        db.collection("rooms").find(
            {
                $and: [
                    { name: { $regex: "d", $options: "i" } },
                    { price: { $gte: 2000 } }
                ]
            },
            { projection: { name: 1, price: 1, _id: 0 } }
        ).toArray()
    );
};

try {
    module.exports = {
        addOneFunc,
        addManyFunc,
        updateOneFunc,
        findRoom,
        deleteManyFunc,
        findName,
        findAccom,
        findNamePrice,
        replaceOneFunc,
        findOneAndUpdateFunc,
        deleteOneFunc,
        findOneAndDeleteFunc
    };
} catch (err) { };