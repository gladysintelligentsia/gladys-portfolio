// Question #1: Calculate the total value of the entire inventory.
// Given an array of product objects, each containing `name`, `category`, `price`, and `quantity`, write a function called `getTotalInventoryValue`.
// The function takes the array of product objects as input and returns the total value of the entire inventory.
// If the input is not an array, return undefined.

//getTotalInventoryValue(products) Output: 5975

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 },
    { name: 'Book', category: 'Books', price: 15, quantity: 25 },
    { name: 'Headphones', category: 'Electronics', price: 50, quantity: 8 }
];

function getTotalInventoryValue(products) {
    if (!Array.isArray(products)) {
        return undefined;
    }
    
    return products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}

// Question #2: Validate a username/password combination.
// Given an array of user objects, each containing `username` and `password`, write a function called `isUserValid`.
// The function takes the array of user objects and a username/password combination as input and returns true if the combination is valid, and false otherwise.

//isUserValid(users, 'petra', 'pass123') Output: true
//isUserValid(users, 'gabi', 'pass109') Output: false

const users = [
    { username: 'petra', password: 'pass123' },
    { username: 'sasha', password: 'pass456' },
    { username: 'bertholdt', password: 'pass789' }
];

function isUserValid(users, username, password) {
    return users.some(user => user.username === username && user.password === password);
}

// Question #3: Calculate employee salaries.
// Given an array of employee objects, each containing `name`, `position`, `hoursWorked`, and `hourlyRate`, write a function called `calculateSalary`.
// The function takes the array of employee objects as input and returns an array of employee objects with an additional property `totalSalary`, which represents the total salary earned by each employee.

//calculateSalary(employees)
// Output:
/* [
    {
        "name": "Yor",
        "position": "Manager",
        "hoursWorked": 40,
        "hourlyRate": 30,
        "totalSalary": 1200
    },
    {
        "name": "Loid",
        "position": "Developer",
        "hoursWorked": 35,
        "hourlyRate": 25,
        "totalSalary": 875
    },
    {
        "name": "Anya",
        "position": "Intern",
        "hoursWorked": 20,
        "hourlyRate": 15,
        "totalSalary": 300
    }
] */ 

const employees = [
    { name: 'Yor', position: 'Manager', hoursWorked: 40, hourlyRate: 30 },
    { name: 'Loid', position: 'Developer', hoursWorked: 35, hourlyRate: 25 },
    { name: 'Anya', position: 'Intern', hoursWorked: 20, hourlyRate: 15 }
];


function calculateSalary(employees) {
    return employees.map(employee => {
        return {
            ...employee,
            totalSalary: employee.hoursWorked * employee.hourlyRate
        };
    });
}

// Question #4: Identify available books in the library.
// Given two arrays, `books` and `borrowers`, each book is represented by an object with `title` and `author`, and each borrower by an object with `name` and `books` (books borrowed by the borrower).
// Write a function called `getAvailableBooks` that returns an array of books that are not currently borrowed.

//getAvailableBooks(books, borrowers)
//Output:
/* [
    {
        "title": "Pride and Prejudice",
        "author": " Jane Austen"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee"
    },
    {
        "title": "A Brief History of Time",
        "author": "Stephen Hawking"
    }
]

*/

const books = [
    { title: 'Pride and Prejudice', author: ' Jane Austen'},
    { title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    { title: 'A Brief History of Time', author: 'Stephen Hawking'},
    { title: 'The Da Vinci Code', author: 'Dan Brown'},
    { title: 'Gone Girl', author: ' Gillian Flynn'}
];

const borrowers = [
    { name: 'Ranpo', books: ['The Da Vinci Code'] },
    { name: 'Dazai', books: ['Gone Girl'] }
];

function getAvailableBooks(books, borrowers) {
    // Create an array of all titles that have been borrowed
    const borrowedTitles = borrowers.reduce((acc, borrower) => {
        return acc.concat(borrower.books);
    }, []);

    // Filter the library books to include only those not in the borrowed list
    return books.filter(book => !borrowedTitles.includes(book.title));
}

// Question #5: Analyze sales data.
// Given an array of sales objects, each containing `date`, `product`, and `quantity`, write a function called `getTotalSalesByDate`.
// The function takes the array of sales objects and a specific date as input and returns the total quantity of products sold on that date.

//getTotalSalesByDate(sales,"2023-01-01") Output: 15

const sales = [
    { date: '2023-01-01', product: 'Album', quantity: 10 },
    { date: '2023-01-01', product: 'Poster', quantity: 5 },
    { date: '2023-01-02', product: 'Light Stick', quantity: 8 },
    { date: '2023-01-02', product: 'Stickers', quantity: 3 }
];

function getTotalSalesByDate(sales, date) {
    return sales
        .filter(sale => sale.date === date)
        .reduce((total, sale) => total + sale.quantity, 0);
}


// Question #6: Calculate Total Time Spent on Tasks
//
// Create a function that calculates the total time spent on tasks in hours.
//
// The input is an array of task objects. Each task contains a `minutes`
// property representing the time spent on that task.
// The function should return the total time in hours.

// - Convert the total minutes into hours.
// - If the input is not an array, return undefined.
// - If the array is empty, return 0.

const tasks = [
  { id: 101, title: "Fix login bug", assignedTo: "Alex", minutes: 120 },
  { id: 102, title: "Create user dashboard", assignedTo: "Sam", minutes: 60 },
  { id: 103, title: "Update documentation", assignedTo: "Jamie", minutes: 150 },
  { id: 104, title: "Code review for PR #24", assignedTo: "Alex", minutes: 60 }
];

function calculateTotalHours(tasks){
    if (!Array.isArray(tasks)) {
        return undefined;
    }
    if (tasks.length === 0) {
        return 0;
    }

    const totalMinutes = tasks.reduce((total, task) => total + task.minutes, 0);
    return totalMinutes / 60;
}

// Question #7: Calculate Total Taxi Fare
//
// Create a function that calculates the total fare for taxi trips.
//
// The input is an array of trip objects.
// The fare for each trip is determined by the distance traveled
// multiplied by a fixed rate per kilometer.
//
// Assume the rate is ₱15 per kilometer.
//
// The function should return the total fare for all trips.

// - If the input is not an array, return undefined.
// - If the array is empty, return 0.

const trips = [
  {
    customer: "Maria Santos",
    pickup: "UP Diliman",
    destination: "SM North EDSA",
    km: 5
  },
  {
    customer: "John Cruz",
    pickup: "Cubao",
    destination: "Makati",
    km: 12
  },
  {
    customer: "Anna Reyes",
    pickup: "Quezon Avenue",
    destination: "Ortigas",
    km: 8
  }
];


function calculateTotalFare(trips){
    if (!Array.isArray(trips)) {
        return undefined;
    }
    if (trips.length === 0) {
        return 0;
    }

    const RATE_PER_KM = 15;
    return trips.reduce((total, trip) => total + (trip.km * RATE_PER_KM), 0);
}

// Exporting functions for testing (Do not modify)
try {
    module.exports = {
        getTotalInventoryValue,
        isUserValid,
        calculateSalary,
        getAvailableBooks,
        getTotalSalesByDate,
        calculateTotalHours,
        calculateTotalFare,
        products,
        users,
        employees,
        books,
        borrowers,
        sales,
        tasks,
        trips
    };
} catch(err) {
    // Error handling if needed
}