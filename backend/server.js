const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // Import SQLite3
const cors = require('cors');
const path = require('path');

const macrosRouter = require("../server/routes/view-macros");

const dbPath = path.resolve(__dirname, 'sn.db'); // Specify the path to your SQLite database file

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

const app = express();
app.use(cors());
const port = process.env.PORT || 3002;
app.use(express.json());

app.use("/api/macros", macrosRouter(db)); // Pass the SQLite database object to your router

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
