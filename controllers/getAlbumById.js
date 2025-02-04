const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rock_albums.db');

module.exports = (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM albums WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Álbum não encontrado.' });
        }
        res.json(row);
    });
};
