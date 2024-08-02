const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint
app.get('/api/data', (req, res) => {
    res.json({
        operation_code: 'OP12345'
    });
});

// POST endpoint
app.post('/api/data', (req, res) => {
    const { userID, collegeEmailID, collegeRollNumber, numbers, alphabets } = req.body;

    if (!userID || !collegeEmailID || !collegeRollNumber || !numbers || !alphabets) {
        return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    res.json({
        status: 'success',
        userID,
        collegeEmailID,
        collegeRollNumber,
        numbers,
        alphabets
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});