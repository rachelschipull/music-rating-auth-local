const express = require('express')
const router = express.Router()
const songsController = require('../controllers/songs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, songsController.getSongs)

router.post('/add', songsController.addSong)

// ~~~NOT COMPLETE~~~
// router.put('/markComplete', songsController.markComplete)
// router.put('/markIncomplete', songsController.markIncomplete)
// router.delete('/deleteTodo', songsController.deleteTodo)

module.exports = router