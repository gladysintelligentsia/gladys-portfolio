// PUT route to change the password of a specific user
app.put('/change-password', (req, res) => {
    let message = "User does not exist";
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            users[i].password = password;
            message = `User ${username}'s password has been updated.`;
            break; 
        }
    }

    res.send(message);
});

// POST route to find a specific user
app.post('/find-user', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).send("Username is required in the request body");
    }

    const foundUser = users.find(user => user.username === username);

    if (foundUser) {
        res.status(200).json(foundUser);
    } else {
        res.status(404).send(`User with username "${username}" not found.`);
    }
});

// DELETE route to remove the last user
app.delete('/delete-user', (req, res) => {
    if (users.length > 0) {
        users.pop();
        res.status(200).json(users);
    } else {
        res.send("Users collection is empty.");
    }
});