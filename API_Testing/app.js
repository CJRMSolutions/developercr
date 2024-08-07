const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simple GET endpoint
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// GET endpoint with parameters
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Received GET request for user ID: ${userId}`);
    res.send(`User ID is: ${userId}`);
});

// POST endpoint with validation
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log('Received POST request:', newUser);
    if (!newUser.name || !newUser.email) {
        return res.status(400).send('Name and email are required');
    }
    // Here you would normally save the user to the database
    res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/`);
});
