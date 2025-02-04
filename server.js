const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const albumRoutes = require('./routes/albums');
const app = express();
const port = 3000;

const db = new sqlite3.Database('./rock_albums.db');

db.run(`CREATE TABLE IF NOT EXISTS albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    year INTEGER NOT NULL,
    genre TEXT NOT NULL
)`);

app.use(express.json());
app.use(cors());
app.use('/albums', albumRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = db;

