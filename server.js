const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    // Handle form data (e.g., save to database)
    console.log('Form Data Received:', formData);
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
