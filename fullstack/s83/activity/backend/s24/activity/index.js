console.log("Hello World");

    let num1 = 25;
    let num2 = 5; 
    let sum1 = num1 + num2;

    console.log("The result of num1 + num2 should be 30.");
    console.log("Actual Result:");
    console.log(sum1);

    let num3 = 156; 
    let num4 = 44;  
    let sum2 = num3 + num4;

    console.log("The result of num3 + num4 should be 200.");
    console.log("Actual Result:");
    console.log(sum2);

    let num5 = 17; 
    let num6 = 10;
    let difference1 = num5 - num6;

    console.log("The result of num5 - num6 should be 7.");
    console.log("Actual Result:");
    console.log(difference1);

    let password = "gonpachiro";
    let confirmPassword = "gonpachiro";

    
    let isCorrectLength = password.length > 8; 

    console.log("Is the password's length correct?");
    console.log(isCorrectLength);

    
    let match = (password === confirmPassword); 

    console.log("Do the passwords match?");
    console.log(match);


let number = 49;
let isDivisibleBySeven = (number % 7 === 0);
console.log("Is " + number + " divisible by 7?");
console.log(isDivisibleBySeven);


let product = 6;
product *= 4; // Multiplication assignment
console.log("Total Cost (Product * 4):");
console.log(product);


let quotient = 24;
quotient /= 3; // Division assignment
console.log("Divided Quotient:");
console.log(quotient);


let modulo = 11;
modulo %= 3; // Modulo assignment
console.log("Remainder of modulo divided by 3:");
console.log(modulo);


let tempCelsius = 132;
let resultFahrenheit = (tempCelsius * 9/5) + 32;
console.log(tempCelsius + " degrees Celsius in Fahrenheit is:");
console.log(resultFahrenheit);


let num7 = 165;
let remainder1 = num7 % 8;
console.log("Is num7 divisible by 8?");
console.log("Remainder: " + remainder1);

let isDivisibleBy8 = (remainder1 === 0);
console.log(isDivisibleBy8);


let num8 = 348;
let remainder2 = num8 % 4;
console.log("Is num8 divisible by 4?");
console.log("Remainder: " + remainder2);

let isDivisibleBy4 = (remainder2 === 0);
console.log(isDivisibleBy4);


let groupA_score = 75;
let groupB_score = 80;
let groupC_score = 76;
let groupD_score = 74;

let average = (groupA_score + groupB_score + groupC_score + groupD_score) / 4;
console.log("Average score of the group:");
console.log(average);

let isPassing = average > 75;
console.log("Average score of the group is greater than 75?");
console.log(isPassing);

try{
    module.exports = {
        sum1: typeof sum1 !== 'undefined' ? sum1 : null,
        sum2: typeof sum2 !== 'undefined' ? sum2 : null,
        difference1: typeof difference1 !== 'undefined' ? difference1 : null,
        match: typeof match !== 'undefined' ? match : null,
        isCorrectLength: typeof isCorrectLength !== 'undefined' ? isCorrectLength : null,
        isDivisibleBySeven: typeof isDivisibleBySeven !== 'undefined' ? isDivisibleBySeven : null,
        product: typeof product !== 'undefined' ? product : null,
        quotient: typeof quotient !== 'undefined' ? quotient : null,
        modulo: typeof modulo !== 'undefined' ? modulo : null,
        resultFahrenheit: typeof resultFahrenheit !== 'undefined' ? resultFahrenheit : null,
        isDivisibleBy8: typeof isDivisibleBy8 !== 'undefined' ? isDivisibleBy8 : null,
        isDivisibleBy4: typeof isDivisibleBy4 !== 'undefined' ? isDivisibleBy4 : null,
        average: typeof average !== 'undefined' ? average : null,
        isPassing: typeof isPassing !== 'undefined' ? isPassing : null,
    }
} catch(err){}