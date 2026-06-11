console.log("Hello World");

function addNum(num1, num2) {
    return num1 + num2;
}

function subNum(num1, num2) {
    return num1 - num2;
}

function multiplyNum(num1, num2) {
    return num1 * num2;
}

function divideNum(num1, num2) {
    return num1 / num2;
}

function getCircleArea(radius) {
    // Formula: PI * radius^2
    return 3.141592653589793 * (radius ** 2);
}

function getAverage(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}

function checkIfPassed(score, total) {
    let percentage = (score / total) * 100;
    let isPassed = percentage > 75;
    return isPassed;
}

function register(firstName, lastName, email, password, mobileNum) {
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        mobileNum: mobileNum
    };
}

let newUser = register("Lilo", "Pelekai", "lilostitch@gmail.com", "liloohana1234", "09276612409");
console.log(newUser);

function createProduct(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity
    };
}

let newProduct = createProduct("Chocolate Bar", 200, 50);
console.log(newProduct);

function createTeamArr(member1, member2, member3, member4, member5) {
    let members = [member1, member2, member3, member4, member5];
    return members;
}

let newTeam = createTeamArr("Eugene", "Dennis", "Alfred", "Vincent", "Jeremiah");
console.log(newTeam);

try {
    module.exports = {
        addNum: typeof addNum !== 'undefined' ? addNum : null,
        subNum: typeof subNum !== 'undefined' ? subNum : null,
        multiplyNum: typeof multiplyNum !== 'undefined' ? multiplyNum : null,
        divideNum: typeof divideNum !== 'undefined' ? divideNum : null,
        getCircleArea: typeof getCircleArea !== 'undefined' ? getCircleArea : null,
        getAverage: typeof getAverage !== 'undefined' ? getAverage : null,
        checkIfPassed: typeof checkIfPassed !== 'undefined' ? checkIfPassed : null,
        register: typeof register !== 'undefined' ? register : null,
        createProduct: typeof createProduct !== 'undefined' ? createProduct : null,
        createTeamArr: typeof createTeamArr !== 'undefined' ? createTeamArr : null
    }
} catch (err) {}