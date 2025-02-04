const express = require('express');
const router = express.Router();
const createAlbum = require('../controllers/createAlbum');
const getAllAlbums = require('../controllers/getAllAlbums');
const getAlbumById = require('../controllers/getAlbumById');
const updateAlbum = require('../controllers/updateAlbum');
const deleteAlbum = require('../controllers/deleteAlbum');

router.post('/', createAlbum);
router.get('/', getAllAlbums);
router.get('/:id', getAlbumById);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;