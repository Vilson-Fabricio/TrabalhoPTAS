const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rock_albums.db');

module.exports = (req, res) => {
    db.all('SELECT * FROM albums', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};