// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create the Express app
const app = express();

// Middleware to parse incoming requests with URL-encoded data (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse incoming requests with JSON data
app.use(bodyParser.json());

// Endpoint to receive OTP data from the frontend
app.post('/receive-otp', (req, res) => {
    const { message, numbers } = req.body;

    // Log the OTP message and phone number for testing purposes
    console.log('Received OTP Message:', message);
    console.log('Received Phone Number:', numbers);

    // Respond back with the OTP details so the frontend can display them
    res.json({
        success: true,
        message: `OTP Sent: ${message}`,
        numbers: numbers
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
