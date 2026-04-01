// 1. PUT route to change the password
app.put('/change-password', (req, res) => {
    // Initializing variable as per instructions
    let message = "User does not exist";
    const { username, password } = req.body;

    // Use a loop to iterate over the users array
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            // Change the password property
            users[i].password = password;
            // Exact message: User (username)'s password has been updated
            // Note: No period at the end!
            message = `User ${username}'s password has been updated`;
            return res.status(200).send(message); 
        }
    }
    // Return 200 status for "User does not exist" message
    res.status(200).send(message);
});

// 2. POST route to find a specific user
app.post('/find-user', (req, res) => {
    const { username } = req.body;

    // Return 400 if username is missing
    if (!username) {
        return res.status(400).send("Username is required in the request body");
    }

    // Use the find method
    const foundUser = users.find(user => user.username === username);

    if (foundUser) {
        // Return 200 and the user object as JSON
        res.status(200).json(foundUser);
    } else {
        // Exact message: User with username "(username)" not found.
        // Note: This one DOES have a period and quotes around the username.
        res.status(404).send(`User with username "${username}" not found.`);
    }
});

// 3. DELETE route to remove the last user
app.delete('/delete-user', (req, res) => {
    // Check if there are users in the array
    if (users.length > 0) {
        users.pop();
        // Return 200 and the updated users array
        res.status(200).json(users);
    } else {
        // Exact message: Users collection is empty
        // Note: No period at the end!
        res.status(200).send("Users collection is empty");
    }
});