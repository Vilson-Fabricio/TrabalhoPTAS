const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rock_albums.db');

module.exports = (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM albums WHERE id = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Álbum não encontrado.' });
        }
        res.json({ message: 'Álbum excluído com sucesso.' });
    });
};