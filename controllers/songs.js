const Songs = require('../models/Songs')

module.exports = {
    getSongs: async (req,res)=>{
        try{
            // find songs not liked by the current user, but added by the current user
            const songItems = await Songs.find({submitUserId:req.user.id,likedSong:false})
            // find songs liked by the current user
            const likedSongs = await Songs.find({submitUserId:req.user.id,likedSong:true})
            // render the EJS songs page
            res.render('songs.ejs', {songs: songItems, liked: likedSongs, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addSong: async (req, res)=>{
        try{
            // add song to database
            await Songs.create({songURL: req.body.songURL, likedSong: false, submitUserId: req.user.id})
            console.log('Song Added!')
            res.redirect('/songs')
        }catch(err){
            console.log(err)
        }
    },
   likeSong: async (req, res)=>{
        try{
            await Songs.findOneAndUpdate({_id:req.body.SongIdFromJSFile},{
              likedSong: true
            })
            console.log('Song Liked')
            res.json('Song was Liked')
        }catch(err){
            console.log(err)
        }
    },
    unLikeSong: async (req, res)=>{
        try{
            await Songs.findOneAndUpdate({_id:req.body.SongIdFromJSFile},{
                likedSong: false
            })
            console.log('Song Unliked')
            res.json('Song was Unliked')
        }catch(err){
            console.log(err)
        }
    },
    deleteSong: async (req, res)=>{
        try{
            await Songs.findOneAndDelete({_id:req.body.SongIdFromJSFile})
            console.log('Song Deleted')
            res.json('Song was Deleted')
        }catch(err){
            console.log(err)
        }
    }
}    