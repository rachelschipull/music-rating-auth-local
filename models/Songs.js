const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  // the spotify song URL embed
  songURL: {
    type: String,
    required: true,
  },
  // Not sure if this is going to work. Needs to be an array of userIDs that liked the song.
  userLIkes: [{
    type: String,
  }],
  // User who submitted the song. 
  submitUserId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Song', SongSchema)
