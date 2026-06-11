/*
Problem #1: Create a program that determines the temperature of water, accept a single argument temperature, which represents the temperature of the water in degrees Celsius. 

Then determine and return the state of water ("solid", "liquid", or "gas") at the given temperature. Use the following conditions:
    - Water is solid (ice) at temperatures below 0C (0 celsius)
    - Water is liquid between 0C and 100C.
    - Water is gas (steam) at temperature above 100C
*/

/*
Apply Key Problem-Solving Techniques
- Understand the Problem
- Plan Your Approach
- Test As You Go
*/

function determineWaterState(temperature) {

    // Validation: Check if temperature is a number
    if(typeof temperature !== 'number') {
        return undefined;
    }

    if(temperature < 0) {
        return "solid";
    } else if (temperature <= 100) {
        return "liquid";
    } else {
        return "gas";
    }

    // return temperature
}

/*
Problem #2: Create a program that returns a number. 

Validate that the function should take an array. Check if numbers is not array or not all elements in numbers are integers. 

Accumulate the total of even numbers.
*/

/*
Apply Key Problem-Solving Techniques
- Understand the Problem
- Plan Your Approach
- Test As You Go
*/

function sumOfEvenNumbers(numbers) {

    // Check if the input is NOT an array
    // OR if the array contains values that are not integers
    if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
        console.log("Invalid input: Please provide an array of integers.")
        return undefined;
    }

    // return numbers;

    let sum = 0;

    numbers.forEach(number => {
        if (number % 2 === 0) sum += number;
    })

    return sum;
}