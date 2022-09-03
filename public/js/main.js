const deleteBtn = document.querySelectorAll('.del')
const songItem = document.querySelectorAll('span.song')
const likedSongItem = document.querySelectorAll('span.liked')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteSong)
})

Array.from(songItem).forEach((el)=>{
    el.addEventListener('click', likeSong)
})

Array.from(likedSongItem).forEach((el)=>{
    el.addEventListener('click', unLikeSong)
})

async function deleteSong(){
    const songId = this.parentNode.dataset.id
    try{
        const response = await fetch('songs/deleteSong', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'songIdFromJSFile': songId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function likeSong(){
    const songId = this.parentNode.dataset.id
    try{
        const response = await fetch('songs/likeSong', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'songIdFromJSFile': songId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function unLikeSong(){
    const songId = this.parentNode.dataset.id
    try{
        const response = await fetch('songs/unLikeSong', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'songIdFromJSFile': songId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}