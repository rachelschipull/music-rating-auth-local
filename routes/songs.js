const express = require('express')
const router = express.Router()
// change to songsController
const songsController = require('../controllers/songs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, songsController.getSongs)

router.post('/add', songsController.addSong)

// router.put('/markComplete', songsController.markComplete)

// router.put('/markIncomplete', songsController.markIncomplete)

// router.delete('/deleteTodo', songsController.deleteTodo)

module.exports = router