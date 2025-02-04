const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rock_albums.db');


module.exports = (req, res) => {
    const { id } = req.params;
    const { title, artist, year, genre } = req.body;
    if (!title || !artist || !year || !genre) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    db.run('UPDATE albums SET title = ?, artist = ?, year = ?, genre = ? WHERE id = ?',
        [title, artist, year, genre, id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: 'Álbum não encontrado.' });
            }
            res.json({ id, title, artist, year, genre });
        }
    );
};
