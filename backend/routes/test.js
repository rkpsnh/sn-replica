module.exports = function(db) {
    const router = require("express").Router();

    router.get("/", async (req, res) => {
        try {
            db.all("SELECT * FROM test", (err, rows) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Database Error");
                    return;
                }
                res.json(rows);
            });
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Database Error");
        }
    });

    return router;
}
