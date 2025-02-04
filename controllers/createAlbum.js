const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rock_albums.db');

module.exports = (req, res) => {
    const { title, artist, year, genre } = req.body;
    if (!title || !artist || !year || !genre) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    db.run(`INSERT INTO albums (title, artist, year, genre) VALUES (?, ?, ?, ?)`,
        [title, artist, year, genre],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID, title, artist, year, genre });
        }
    );
};
