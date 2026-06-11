console.log("Hello World");

let firstName = "Jane";
let lastName = "Doe";
let age = 25;
let hobbies = ["Reading", "Coding", "Hiking"];
let workAddress = {
    houseNumber: "123",
    street: "Main St",
    city: "Manila",
    state: "Metro Manila"
};

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(workAddress);

let fullName = firstName + " " + lastName;
console.log(fullName);

let intro = "Hi! My name is " + fullName;
console.log(intro);

let str = "Twice";
let num = 27;
let bool = true;
let arr = ["Dahyun", "Chaeyoung", "Mina"];
let obj = { twice: "Dahyun" };

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);

let realName = "Steve Rogers";
console.log("My real name is " + realName);

let currentAge = 40; 
console.log("My current age is: " + currentAge);

let profile = {
    username: "captain_america", // Added missing comma
    fullName: "Steve Rogers",    // Added missing comma
    age: 40,                     // Added missing comma
    isActive: false
};

console.log("My Full Profile: ");
console.log(profile);

let deposits = [2000, 4000, 600, 100, true, {}, [1, 2, 3]];
console.log("Your deposits: " + deposits);

let expenses = [1000, 2000, 500, 210];
console.log("Your expenses: " + expenses);

let isAdmin = "true";
console.log("Is the current user an admin?: " + isAdmin);

const interestRate = 30;
console.log("The current interest rate: " + interestRate);

const loginKey = "EcommerceAPI";
console.log("The current login key is: " + loginKey);

let bankCode = "BANK123";
bankCode = "BANK456";
console.log("Bank code: " + bankCode);

let bankBalance = 500;
bankBalance = bankBalance + 100;
console.log("Updated bank balance: " + bankBalance);

try {
    module.exports = {
        firstName: typeof firstName !== 'undefined' ? firstName : null,
        lastName: typeof lastName !== 'undefined' ? lastName : null,
        age: typeof age !== 'undefined' ? age : null,
        hobbies: typeof hobbies !== 'undefined' ? hobbies : null,
        workAddress: typeof workAddress !== 'undefined' ? workAddress : null,
        fullName: typeof fullName !== 'undefined' ? fullName : null,
        intro: typeof intro !== 'undefined' ? intro : null,
        str: typeof str !== 'undefined' ? str : null,
        num: typeof num !== 'undefined' ? num : null,
        bool: typeof bool !== 'undefined' ? bool : null,
        arr: typeof arr !== 'undefined' ? arr : null,
        obj: typeof obj !== 'undefined' ? obj : null,
        realName: typeof realName !== 'undefined' ? realName : null,
        currentAge: typeof currentAge !== 'undefined' ? currentAge : null,
        profile: typeof profile !== 'undefined' ? profile : null,
        deposits: typeof deposits !== 'undefined' ? deposits : null,
        expenses: typeof expenses !== 'undefined' ? expenses : null,
        isAdmin: typeof isAdmin !== 'undefined' ? isAdmin : null,
        interestRate: typeof interestRate !== 'undefined' ? interestRate : null,
        loginKey: typeof loginKey !== 'undefined' ? loginKey : null,
        bankCode: typeof bankCode !== 'undefined' ? bankCode : null,
        bankBalance: typeof bankBalance !== 'undefined' ? bankBalance : null
    };
} catch (err) {}