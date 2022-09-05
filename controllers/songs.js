const Songs = require('../models/Songs')

module.exports = {
    getSongs: async (req,res)=>{
        console.log(req.user)
        try{
            // find all songs in database
            const allSongs = await Songs.find()
            // find songs liked by the current user
            const likedSongs = await Songs.find({
                userLIkes: req.user.id
              })
            // render the EJS songs page
            res.render('songs.ejs', {songs: allSongs, liked: likedSongs, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addSong: async (req, res)=>{
        try{
            // add song to database
            //await Songs.create({songURL: req.body.songURL, userLIkes: [req.user.id], submitUserId: req.user.id})
            await Songs.create({songURL: req.body.songURL, userLIkes: [req.user], submitUserId: req.user.id})
            console.log('Song has been added!')
            res.redirect('/songs')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            //console.log(req)
            //const userName = req.user._id + '||||' + req.user.userName
            await Songs.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{$push:{userLIkes: req.user._id +'||'+ req.user.userName  }})
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            // await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
            //     completed: false
            // })
            await Songs.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{$pull:{userLIkes: req.user._id +'||'+ req.user.userName  }})
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteSong: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Songs.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
    // test begin
    // markComplete: async (req, res)=>{
    //     try{
    //         await Songs.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //          //   $push:{"userLIkes":req.user}
    //                 submitUserId:'test'
    //         })
            
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // test end
}    