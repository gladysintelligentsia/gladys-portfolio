// Question #1: Given the following specification, create a flowchart to demonstrate its logic. Save the image as a png and add it in your activity folder as solution5.

/* Specification:
    Create a program that takes an array of numbers as input, validates the array to ensure it has at least one element, and checks if all numbers in the array are even. If the array is empty or contains non-numeric values, return an error message. Otherwise, return true if all numbers are even and false otherwise.
*/

// Question #2: Add a new book with the following properties:
// Automatic unique ID assignment
// Title and author should be a string
// Year should be a positive number
// isAvailable defaults to true

//addBook(library,newBook) Output: true

const library = [
    { id: 1, title: '1984', author: 'George Orwell', year: 1949, isAvailable: true },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isAvailable: false }
];
const newBook = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };

function addBook(library, newBook) {
    // Validation
    if (typeof newBook.title !== 'string' || typeof newBook.author !== 'string') {
        return "Invalid title or author";
    }
    if (typeof newBook.year !== 'number' || newBook.year <= 0) {
        return "Year must be a positive number";
    }

    // Automatic unique ID assignment (max ID + 1)
    const nextId = library.length > 0 ? Math.max(...library.map(book => book.id)) + 1 : 1;

    // Create the updated book object
    const bookToAdd = {
        id: nextId,
        title: newBook.title,
        author: newBook.author,
        year: newBook.year,
        isAvailable: newBook.isAvailable !== undefined ? newBook.isAvailable : true
    };

    library.push(bookToAdd);
    return true;
}

// Question #3: Retrieve either details of a specific book by its ID or an array of details for all books, optionally filtered by availability. 

//getBooks(library,1)
//Output:
/* {
        "id": 1,
        "title": "1984",
        "author": "George Orwell",
        "year": 1949,
        "isAvailable": true
    }
*/

function getBooks(library, id = null, filterAvailable = null) {
    // Scenario A: Specific book requested by ID
    if (id !== null) {
        const book = library.find(b => b.id === id);
        return book ? book : "Book not found";
    }

    // Scenario B: All books requested, with optional availability filter
    if (filterAvailable !== null) {
        return library.filter(b => b.isAvailable === filterAvailable);
    }

    return library;
}

// Question #4: Update a book's availability isAvailable after validating the book exists and ensuring the new isAvailable differs from the current.

//updateBookAvailability(library,1,false) Output: true
//updateBookAvailability(library,1,true) Output: true
//updateBookAvailability(library,4,false) Output: `book not found`

function updateBookAvailability(library, id, isAvailable) {
    const book = library.find(b => b.id === id);
    
    if (!book) {
        return "book not found";
    }

    // Check if the status is different
    if (book.isAvailable === isAvailable) {
        return "Status is already set to this value";
    }

    book.isAvailable = isAvailable;
    return true;
}

// Question #5: Remove a book by its ID only if it is marked as unavailable.

//removeBook(library,2) Output: true
//removeBook(library,1) Output: "Book must be unavailable to be removed."

function removeBook(library, id) {
    const index = library.findIndex(b => b.id === id);

    if (index === -1) {
        return "Book not found";
    }

    if (library[index].isAvailable) {
        return "Book must be unavailable to be removed.";
    }

    library.splice(index, 1);
    return true;
}

// Question #6: List all books, with an option to filter by their availability isAvailable.

function listBooks(library, filterAvailable = null) {
    if (filterAvailable !== null) {
        return library.filter(b => b.isAvailable === filterAvailable);
    }
    return library;
}

// Question #7: Return the oldest book in the library based on the year.
// Validate that the library is not empty.
// If the library is empty return "library is empty".

//getOldestBook(library)
/*
Output:
{
    id: 1,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isAvailable: true
}
*/

function getOldestBook(library) {
    if (!library || library.length === 0) {
        return "library is empty";
    }

    // Use reduce to find the book with the lowest year
    return library.reduce((oldest, current) => current.year < oldest.year ? current : oldest, library[0]);
}

// Question #8: Return a summary report of the library.
// The function should return an object containing:
// - totalBooks: total number of books
// - availableBooks: number of books with isAvailable = true
// - borrowedBooks: number of books with isAvailable = false

//getLibrarySummary(library)
/*
Output:
{
    totalBooks: 2,
    availableBooks: 1,
    borrowedBooks: 1
}
*/

function getLibrarySummary(library) {
    const totalBooks = library.length;
    const availableBooks = library.filter(b => b.isAvailable === true).length;
    const borrowedBooks = library.filter(b => b.isAvailable === false).length;

    return {
        totalBooks,
        availableBooks,
        borrowedBooks
    };
}

//Flowchart Interview Questions

// Question #9 Given the following code, create the appropriate Flowchart.
// You can use draw.io and save the png into the activity folder.

function determineGrade(score) {
    // Input score as parameter
    if (typeof score !== 'number') {
        // Return "invalid input" if score is not a number
        return "invalid input";
    }

    // Check if score is within valid range
    if (score < 0 || score > 100) {
        // Return "invalid score" if score is outside the range 0-100
        return "invalid score";
    }

    // Determine grade based on score
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Return the grade
    return grade;
}
// --- TEMPORARY TEST LOGS FOR SCREENSHOT ---
console.log("--- Testing s80 Machine Problem 3 ---");
console.log("Add Book Result:", addBook(library, newBook));
console.log("Library Summary:", getLibrarySummary(library));
// Exporting functions for testing (Do not modify)
try{
    module.exports = {
        addBook: typeof addBook !== 'undefined' ? addBook : null,
        getBooks: typeof getBooks !== 'undefined' ? getBooks : null,
        updateBookAvailability: typeof updateBookAvailability !== 'undefined' ? updateBookAvailability : null,
        removeBook: typeof removeBook !== 'undefined' ? removeBook : null,
        listBooks: typeof listBooks !== 'undefined' ? listBooks : null,
        getOldestBook: typeof getOldestBook !== 'undefined' ? getOldestBook : null,
        getLibrarySummary: typeof getLibrarySummary !== 'undefined' ? getLibrarySummary : null,
    }
} catch(err){
    // silent catch
}