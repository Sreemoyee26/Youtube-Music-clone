const {songs} = {
    "songs": [
        {
            "name": "Eternal Youth",
            "artist": "Rude",
            "location": "./assets/songs/Eternal.mp3",
            "image": "./assets/images/artist_image.jpeg",
            "liked": true,
            "id": 0
        },
        {
            "name": "Never Gonna Give You Up",
            "artist": "Rick Astely",
            "location": "./assets/songs/NGGYU.mp3",
            "image": "./assets/images/content/nggyp.jpg",
            "liked": false,
            "id": 1
        },
        {
            "name": "Keeping It",
            "artist": "Sou",
            "location": "./assets/songs/keepingIt.mp3",
            "image": "./assets/images/content/keepingIt.png",
            "liked": false,
            "id": 2
        },
        {
            "name": "Eye of the Tiger",
            "artist": "Surviour",
            "location": "./assets/songs/eyeTiger.mp3",
            "image": "./assets/images/content/survivor.jpg",
            "liked": false,
            "id": 3
        },
        {
            "name": "Kenny G Collection",
            "artist": "Kenny G",
            "location": "./assets/songs/kenny.mp3",
            "image": "./assets/images/content/kennyg.jpg",
            "liked": false,
            "id": 4
        },
        {
            "name": "Noctornal",
            "artist": "The Midnight",
            "location": "./assets/songs/noctornal.mp3",
            "image": "./assets/images/content/noctornal.jpg",
            "liked": false,
            "id": 5
        },
        {
            "name": "Unravel",
            "artist": "TK",
            "location": "./assets/songs/unravel.mp3",
            "image": "./assets/images/content/unravel.jpg",
            "liked": true,
            "id": 6
        }
    ]
}

window.addEventListener("scroll",()=>{
    var nav = document.querySelector(".navbar");
    //var elmnt = document.querySelector("body");
    //console.log(elmnt.scrollTop)
    //if(elmnt.scrollTop > 0){
        nav.style.backgroundColor = "black";
        //console.log("heelo");
    //}
});

var Search = document.querySelector(".search");
Search.onclick = () =>{
    var NavLinks = document.querySelector(".nav-links");
    NavLinks.style.display = "none";
    var NavItem = document.querySelector(".nav-items");
    var search = document.createElement("input");
    var icon = document.createElement("i");
    icon.classList = "fas fa-arrow-left back"
    search.type = "search";
    search.classList = "searchbox input-field";
    NavItem.append(icon,search);
    icon.onclick = () =>{
        var NavLinks = document.querySelector(".nav-links");
        NavLinks.style.display = "flex";
        search.style.display = "none";
        icon.style.display = "none";
    }
}

