//Syntax Error

const users = [
    {
        username: "shinji1",
        role: "swordsman"
    },

    {
        username: "reirei02",
        role: "healer"
    },

    {
        username: "asukaEva3",
        role: "rogue"
    }

];


function displayUsernames() {

    users.forEach((user)=>{

        console.log(user.username);

    })

}

displayUsernames();


function createUser(username,role) {

    const userDetails = {

        username,
        role

    }

    users.push(userDetails);

}

createUser("makoto", "healer");


function displayAvailableRoles(){

    for(let i = 0; i < users.length; i++){

        console.log(users[i]);
        console.log(users[i].role);

    }

}

displayAvailableRoles();

// In this function the value of users is empty array
function returnUsernameArray(){

    let usernames = [];

    for(let i = 0; i < users.length; i++){

        usernames.push(users[i].username);

    }

    return usernames;

}

let usernames = returnUsernameArray();

console.log(usernames);
