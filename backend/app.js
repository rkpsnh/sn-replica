const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('ServiceNow Replica Backend');
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});