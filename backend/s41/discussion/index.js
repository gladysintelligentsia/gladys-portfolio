








const express = require("express");



const mongoose = require("mongoose");

const app = express();






const port = 4000;

// ------------------
// DATABASE CONNECTION


mongoose.connect("mongodb://gladysramos:admin123@ac-rqp1qu2-shard-00-00.a3ucxcu.mongodb.net:27017,ac-rqp1qu2-shard-00-01.a3ucxcu.mongodb.net:27017,ac-rqp1qu2-shard-00-02.a3ucxcu.mongodb.net:27017/b606ToDoApp?ssl=true&replicaSet=atlas-y6h2k5-shard-0&authSource=admin&appName=Cluster0")


let db = mongoose.connection;





db.on("error", console.error.bind(console, "connection error"));

mongoose.connection.once('open', () => console.log ('Now connected to MongoDB Atlas.'));

app.use(express.json());


app.use(express.urlencoded({extended: true}));


if(require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}`))
	;
}




module.exports = {app, mongoose};


const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
		default: "pending"
	}
})





const Task = mongoose.model("Task", taskSchema);

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

//ROUTE


app.post("/tasks", (req, res) => {


	if (!req.body.name) {


		return res.status(400).send("Task name is required");	
	}


Task.findOne({ name: req.body.name })





.then((result) => {

	
	if (result) {
		return res.send("Duplicate task found");
	}


	let newTask = new Task({
		name: req.body.name
	});


	return newTask.save();
})

.then((savedTask) => {

	if(savedTask) {
		console.log(savedTask);
		return res.send("New task created");
	}
})

.catch((err) => {
	console.log(err);
	return res.status(500).send("Server error")
	})
})

// GET
app.get("/tasks", (req, res) => {
    Task.find({})
    .then(result => {
        if (result.length === 0) {
            return res.status(404).send("No tasks found in the database.");
        }
       
        return res.send(result);
    })
    .catch(err => {
        console.error("Error retrieving tasks:", err);
        return res.status(500).send(err);
    });
});


// ======================== Member 2-3 =============================
app.post(`/search-task`, (req, res) => {

    if(!req.body.name)
        return res.status(400).send(`Task name is required`);

    Task.findOne({ name: req.body.name })
    .then((result) => { 
        if(!result)
            return res.status(404).send(`Task not found`);

        console.log(result);
        return res.send(`${result}`);
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).send(`Server Error`);
    })
});

app.post(`/register`, (req, res) => {

    if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password)
        return res.status(400).send(`All fields must be provided`);

    User.findOne({ email: req.body.email })
    .then((result) => {
        if(result)
            return res.send(`Duplicate email found`);

        let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
        });

        return newUser.save()
    })
    .then((savedUser) => {
        if(savedUser){
            console.log(savedUser);
            return res.send(`New user registered`);
        }
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).send(`Server Error`);
    })
});
// ======================== End of Member 2-3 =============================


// Member 04
app.post("/login", (req, res) => {

    User.findOne({ email: req.body.email })

    .then((result) => {

        if (result) {

            if (result.password === req.body.password) {
                return res.send("Thank you for logging in");
            } else {
                return res.send("Wrong Password.");
            }

        } else {
            return res.send("Email does not exist");
        }

    })

    .catch((err) => {
        return res.status(500).send("Server error");
    });

});
// End of Member 04




if(require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}`));
}


module.exports = {app, mongoose};