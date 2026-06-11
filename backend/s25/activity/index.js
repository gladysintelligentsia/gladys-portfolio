console.log("Hello World");

function getUserInfo() {
    return {
        name: "John Doe",
        age: 30,
        address: "123 Manila St.",
        isMarried: false,
        petName: "Buddy"
    };
}

let userInfo = getUserInfo();
console.log(userInfo);

function getArtistsArray() {
    return ["Coldplay", "Taylor Swift", "Eraserheads", "Nirvana", "The Beatles"];
}

let artists = getArtistsArray();
console.log(artists);

function getSongsArray() {
    return ["Yellow", "Cruel Summer", "Ang Huling El Bimbo", "Smells Like Teen Spirit", "Yesterday"];
}

let songs = getSongsArray();
console.log(songs);

function getMoviesArray() {
    return ["Inception", "The Dark Knight", "Interstellar", "The Matrix", "Pulp Fiction"];
}

let movies = getMoviesArray();
console.log(movies);

function getPrimeNumberArray() {
    return [2, 3, 5, 7, 11];
}

let primes = getPrimeNumberArray();
console.log(primes);

let globalTreasure = "Golden Key";

function seekGlobalTreasure() {
    return "Global Treasure Found: " + globalTreasure;
}

console.log(seekGlobalTreasure());

function localQuest() {
    let localGems = "Shiny Diamonds";
    return "Local Gems Discovered: " + localGems;
}

console.log(localQuest());

function revealBlockSecret() {
    let blockSecret = "Hidden Treasure";
    return "Block Secret Revealed: " + blockSecret;
}

console.log(revealBlockSecret());

function returnSquared12() {
    return 12 ** 2;
}

let result = returnSquared12();
console.log(result);

function returnRegisteredEmails() {
    let emails = ["mara@mail.com", "clara@mail.com", "julie@mail.com"];
    return emails;
}

let emails = returnRegisteredEmails();
console.log(emails);

function returnItemInfo() {
    let item = {
        name: "Koko Krunch",
        description: "Koko Krunch is a staple chocolate cereal breakfast",
        price: 75
    };
    return item;
}

let item1 = returnItemInfo();
console.log(item1);

function retrieveAccount() {
    let account = {
        username: "michaelVillanueva",
        income: 60000,
        expenses: 25000
    };
    return account;
}

let userAccount = retrieveAccount();
console.log(userAccount);

try {
    module.exports = {
        getUserInfo,
        getArtistsArray,
        getSongsArray,
        getMoviesArray,
        getPrimeNumberArray,
        seekGlobalTreasure,
        localQuest,
        returnSquared12,
        result,
        returnRegisteredEmails,
        emails,
        returnItemInfo,
        item1,
        retrieveAccount
    };
} catch (err) {}