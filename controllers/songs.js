const Songs = require('../models/Songs')

module.exports = {
    getSongs: async (req,res)=>{
        console.log(req.user)
        try{
            // find all songs in database added by current user
            const songItems = await Songs.find({userId:req.user.id})
            // find songs liked by the current user
            const likedSongs = await Songs.find({userId:req.user.id,likedSong:true})
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
            console.log('Song has been added!')
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
            res.json('Song was liked')
        }catch(err){
            console.log(err)
        }
    },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteSong: async (req, res)=>{
        console.log(req.body.songIdFromJSFile)
        try{
            await Songs.findOneAndDelete({_id:req.body.songIdFromJSFile})
            console.log('Deleted song')
            res.json('Song was deleted')
        }catch(err){
            console.log(err)
        }
    }
}    