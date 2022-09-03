const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  // the spotify song URL embed
  songURL: {
    type: String,
    required: true,
  },
  // whether or not the user has liked the current song
  likedSong: {
    type: Boolean,
    required: true
  },
  // User who submitted the song
  submitUserId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Song', SongSchema)
