require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Workout = require('./models/workoutsModel');
const Customer = require('./models/CustomersModel');
const bodyParser = require('body-parser');


const app = express();

// Middleware
app.use(bodyParser.json());


app.get('/books', (req, res) => {
    res.status(500).json({ success: "app on the browser"});
})

// Get Workouts

app.get('/workouts', async(req, res) => {
    
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
    console.log(workouts);
})


app.get('/customers', async(req, res) => {
    
    const customers = await Customer.find({}).sort({ createdAt: -1 });

    res.status(200).json(customers);
    console.log(customers);
})

// Get a single workout

app.get('/workouts/:id', async(req, res) => {
    const { id } = req.params;


    const workout = await Workout.findById(id);

    res.status(500).json(workout);
})


app.get('/customers/login/:id', async(req, res) => {
    const { id } = req.params;

    console.log("from login", id);

    const customer = await Customer.findOne({ email : id });

    res.status(200).json(customer);
})



// Create a workout

app.post('/workouts', async(req, res) => {
    
    const { title, reps, load } = req.body;

    const workout = await Workout.create({ title, load, reps });

    res.status(200).json(workout);

})


app.post('/customers', async(req, res) => {
    
    const { email, username, password } = req.body;

    const customer = await Customer.create({ email, username, password });

    res.status(200).json(customer);

})

// Delete a workout
app.delete("/workouts/:id", async(req, res) => {
    const { id } = req.params;

    const workout = await Workout.findOneAndDelete({ _id: id });

    res.status(500).json(workout);
})

// update a workout

app.patch('/workouts/:id', async(req, res) => {
    const { id } = req.params;

    const workout = await Workout.findOneAndUpdate({ _id: id }, {...req.body} );

    res.status(200).json(workout);
})


// configure for heroku

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}


// Connect to mongodb
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(process.env.PORT || 8080, () => {
                console.log("Connecting to db && Listening to port 4000");
            })
        })
        .catch((error) => {
            console.log(error);
        })




