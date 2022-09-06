const express = require('express')
const router = express.Router()
const songsController = require('../controllers/songs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, songsController.getSongs)

router.post('/add', songsController.addSong)

router.put('/likeSong', songsController.likeSong)

router.put('/unLikeSong', songsController.unLikeSong)

router.delete('/deleteSong', songsController.deleteSong)

module.exports = router