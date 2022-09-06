const deleteBtn = document.querySelectorAll('.del')
const songItem = document.querySelectorAll('span.song')
const likedSongItem = document.querySelectorAll('span.liked')
let menu = document.querySelector(".mobile-menu");
let nav = document.querySelector(".nav-bar");

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
                'SongIdFromJSFile': songId
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
                'SongIdFromJSFile': songId
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
                'SongIdFromJSFile': songId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Event listener for mobile menu
menu.addEventListener("click", () => {

    switchMenuIcon(menu);
    mobileMenuToggle(nav);
    
    })
    
    function switchMenuIcon(icon) {
        icon.classList.toggle("fa-times");
    }
    
    function mobileMenuToggle(nav) {
        nav.classList.toggle("toggle-nav");
    }