async function insertSales(db) {
    return await db.collection("sales").insertMany([
        { _id: 1, product: "A", quantity: 2, category: "Electronics", price: 100, date: new Date("2024-08-09T10:17:23.349Z") },
        { _id: 2, product: "B", quantity: 3, category: "Clothing", price: 50, date: new Date("2024-08-09T10:17:23.349Z") },
        { _id: 3, product: "C", quantity: 1, category: "Electronics", price: 200, date: new Date("2024-08-09T10:17:23.349Z") }
    ]);
}

async function insertCustomers(db) {
    return await db.collection("customers").insertMany([
        { _id: 1, name: "John", age: 35, gender: "Male", region: "North" },
        { _id: 2, name: "Alice", age: 28, gender: "Female", region: "South" },
        { _id: 3, name: "Bob", age: 45, gender: "Male", region: "North" }
    ]);
}

async function totalRevenue(db) {
    return await db.collection("sales").aggregate([
        { $group: { _id: "$category", totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } } } }
    ]);
}

async function quantityPerSales(db) {
    return await db.collection("sales").aggregate([
        { $group: { _id: "$category", totalQuantity: { $sum: "$quantity" } } }
    ]);
}

async function customerPerRegion(db) {
    return await db.collection("customers").aggregate([
        { $group: { _id: "$region", customerCount: { $sum: 1 } } }
    ]);
}

async function demographicsByAge(db) {
    return await db.collection("customers").aggregate([
        { $match: { age: { $gte: 20, $lte: 40 } } },
        { $group: { _id: null, count: { $sum: 1 } } }
    ]);
}

async function orderAverage(db) {
    return await db.collection("sales").aggregate([
        { $group: { _id: null, averageOrderValue: { $avg: "$price" } } }
    ]);
}

async function productPopularity(db) {
    return await db.collection("sales").aggregate([
        {
            $project: {
                product: 1,
                yearMonth: { $dateToString: { format: "%Y-%m", date: "$date" } }
            }
        },
        { $group: { _id: { yearMonth: "$yearMonth", product: "$product" }, count: { $sum: 1 } } },
        { $sort: { "_id.yearMonth": 1, count: -1 } }
    ]);
}

async function salesOutlier(db) {
    return await db.collection("sales").aggregate([
        { $project: { product: 1, price: 1 } },
        { $match: { price: { $gt: 1000 } } }
    ]);
}

async function quantityLessThan3(db) {
    return await db.collection("sales").aggregate([
        { $match: { quantity: { $lt: 3 } } },
        { $group: { _id: null, salesQuantityLessThan3: { $sum: 1 } } }
    ]);
}

async function priceLessThan100(db) {
    return await db.collection("sales").aggregate([
        { $match: { price: { $lt: 100 } } },
        { $group: { _id: null, salesPriceLessThan100: { $sum: 1 } } }
    ]);
}

try {
    module.exports = {
        insertSales,
        insertCustomers,
        totalRevenue,
        quantityPerSales,
        customerPerRegion,
        demographicsByAge,
        orderAverage,
        productPopularity,
        salesOutlier,
        quantityLessThan3,
        priceLessThan100
    };
} catch (err) { }