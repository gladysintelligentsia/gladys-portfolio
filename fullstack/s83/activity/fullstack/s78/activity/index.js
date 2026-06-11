// Question #1: Create a program to check if a given string is a palindrome or not. 
// Add validation, if the argument is not a string, return undefined. 
// Palindrome words should be 3 characters and up.

//isPalindrome("level") Output: true
//isPalindrome("cat") Output: false

function isPalindrome(string) {
    if (typeof string !== 'string') return undefined;
    if (string.length < 3) return false;
    
    const reversed = string.split('').reverse().join('');
    return string === reversed;
}

// Question #2: Create a program to determine if a given year is a leap year. 
// The program should check if the input is a positive integer representing a year. If the input is not a valid year (i.e., not a positive integer), the program should return undefined.

//isLeapYear(2000) Output: true
//isLeapYear(1900) Output: false

function isLeapYear(year) {
    if (!Number.isInteger(year) || year <= 0) return undefined;
    
    // Leap year logic: divisible by 4 but not 100, UNLESS divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Question #3: Create a program that checks the age to give the proper price 
// Return undefined for people aged below 13.
// Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
// Return the rounded off price for people aged 22 to 64.
// The returned value should be a string.

//purchase(65, 100) Output: 80.00
//purchase(23, 100) Output: 100.00
//purchase(13, 100) Output: undefined

function purchase(age, price) {
    // Note: The example shows purchase(13, 100) returns undefined, implying 13 itself might be excluded, 
    // but instructions say "aged 13 to 21" get a discount. Following the explicit sample output rule:
    if (age <= 13) return undefined; 
    
    let finalPrice = price;
    
    // Students (14 to 21) and Seniors (65+) get 20% discount
    if ((age >= 14 && age <= 21) || age >= 65) {
        finalPrice = price * 0.8;
    }
    
    return finalPrice.toFixed(2);
}

// Question #4: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

//formatUsernames(["miguel106","moonnight","biniFan101"]) Output: ['User: Miguel106', 'User: Moonnight', 'User: BiniFan101']

function formatUsernames(usernames) {
    if (!Array.isArray(usernames)) return undefined;
    if (!usernames.every(user => typeof user === 'string')) return undefined;
    
    return usernames.map(user => {
        if (user.length === 0) return "User: ";
        return "User: " + user.charAt(0).toUpperCase() + user.slice(1);
    });
}

// Question #5: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inpus are arrays and contain only integers, if not return undefined

//optimizeDeliverySchedule([2004,2005,2001],[1991,1992,1993]) Output: [1991, 1992, 1993, 2001, 2004, 2005]

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {
    if (!Array.isArray(datesWarehouse1) || !Array.isArray(datesWarehouse2)) return undefined;
    
    const allDates = [...datesWarehouse1, ...datesWarehouse2];
    if (!allDates.every(date => Number.isInteger(date))) return undefined;
    
    // Filter duplicates and sort numerically
    const uniqueDates = [...new Set(allDates)];
    return uniqueDates.sort((a, b) => a - b);
}

// Question #6: Develop a program that removes all scores that are below a certain threshold. 
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places. 
// If after filtering there are no scores left or the input is invalid, return undefined

//removeLowScoresAndCalculateAverage([91,85,72,73,75], 75) Output: 83.67

function removeLowScoresAndCalculateAverage(scores, threshold) {
    if (!Array.isArray(scores) || !scores.every(score => Number.isInteger(score))) return undefined;
    
    // Filter scores kept (equal to or greater than the threshold)
    const validScores = scores.filter(score => score >= threshold);
    if (validScores.length === 0) return undefined;
    
    const sum = validScores.reduce((acc, curr) => acc + curr, 0);
    const average = sum / validScores.length;
    
    return parseFloat(average.toFixed(2));
}

// Question #7
// Find the Longest Word
//
// Create a function that returns the longest word in a sentence.
// 1. If multiple words have the same length, return the FIRST one that appears.
// 2. Ignore punctuation marks.
// 3. Words should be treated normally (no need to change case unless desired).
// 4. If the input is NOT a string, return undefined.

// longestWord("I love programming") Output: "programming"
// longestWord("cat dog pig") Output: "cat"

function longestWord(sentence) {
    if (typeof sentence !== 'string') return undefined;
    if (sentence.trim() === "") return "";

    // Remove punctuation using regex, split by spaces
    const cleanSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const words = cleanSentence.split(/\s+/);
    
    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Question #8
// Extract Numbers from a String
//
// Create a function that extracts all numbers from a string
// and returns them as an array of integers.
//
// 1. The input must be a string.
// 2. Ignore all non-digit characters.
// 3. Return the digits as integers inside an array.
// 4. If the input is not a string, return undefined.

// extractNumbers("a1b2c3") Output: [1,2,3]
// extractNumbers("abc") Output: []

function extractNumbers(str) {
    if (typeof str !== 'string') return undefined;
    
    const digits = str.replace(/\D/g, ""); // strip all non-digits
    if (!digits) return [];
    
    return digits.split("").map(num => parseInt(num, 10));
}

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {
		isPalindrome: typeof isPalindrome !== 'undefined' ? isPalindrome : null,
		isLeapYear: typeof isLeapYear !== 'undefined' ? isLeapYear : null,
		purchase: typeof purchase !== 'undefined' ? purchase : null,
		formatUsernames: typeof formatUsernames !== 'undefined' ? formatUsernames : null,
		optimizeDeliverySchedule: typeof optimizeDeliverySchedule !== 'undefined' ? optimizeDeliverySchedule : null,
		removeLowScoresAndCalculateAverage: typeof removeLowScoresAndCalculateAverage !== 'undefined' ? removeLowScoresAndCalculateAverage : null,
		longestWord: typeof longestWord !== 'undefined' ? longestWord : null,
		extractNumbers: typeof extractNumbers !== 'undefined' ? extractNumbers : null,
	}
} catch(err){

}