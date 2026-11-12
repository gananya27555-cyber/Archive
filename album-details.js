
var albums = {

    nevermind: {
        title: "Nevermind",
        artist: "Nirvana",
        genre: "Grunge Rock",
        year: "1991",
        cover: "images/nevermind.jpg",
        description: "An influential album that helped bring grunge music into the mainstream, featuring a raw sound and memorable guitar music."
    },

    metallica: {
        title: "Metallica (The Black Album)",
        artist: "Metallica",
        genre: "Heavy Metal",
        year: "1991",
        cover: "images/metallica.jpg",
        description: "One of the band's most successful albums, known for powerful guitar riffs and songs such as Enter Sandman."
    },

    thriller: {
        title: "Thriller",
        artist: "Michael Jackson",
        genre: "Pop",
        year: "1982",
        cover: "images/thriller.jpg",
        description: "A landmark pop album featuring unforgettable songs, creative music videos and impressive production."
    },

    appetite: {
        title: "Appetite for Destruction",
        artist: "Guns N' Roses",
        genre: "Hard Rock",
        year: "1987",
        cover: "images/appetite.jpg",
        description: "A legendary hard rock debut featuring energetic guitar work and songs such as Sweet Child O' Mine."
    },

    queen: {
        title: "A Night at the Opera",
        artist: "Queen",
        genre: "Rock",
        year: "1975",
        cover: "images/queen.jpg",
        description: "An ambitious album featuring a mixture of rock, opera and experimental musical arrangements."
    },

    darkside: {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        genre: "Progressive Rock",
        year: "1973",
        cover: "images/dark-side.jpg",
        description: "A concept album exploring themes of time, life and human experience through experimental sounds."
    },

    abbeyroad: {
        title: "Abbey Road",
        artist: "The Beatles",
        genre: "Rock",
        year: "1969",
        cover: "images/abbey-road.jpg",
        description: "One of the most celebrated Beatles albums, known for its iconic cover and creative musical arrangements."
    },

    rumours: {
        title: "Rumours",
        artist: "Fleetwood Mac",
        genre: "Soft Rock",
        year: "1977",
        cover: "images/rumours.jpg",
        description: "A classic album filled with memorable melodies, harmonies and deeply personal songwriting."
    },

    am: {
        title: "AM",
        artist: "Arctic Monkeys",
        genre: "Indie Rock",
        year: "2013",
        cover: "images/am.jpg",
        description: "A stylish rock album combining guitar-driven music with strong rhythms and memorable melodies."
    },

    backinblack: {
        title: "Back in Black",
        artist: "AC/DC",
        genre: "Hard Rock",
        year: "1980",
        cover: "images/back-in-black.jpg",
        description: "A classic hard rock album featuring powerful guitar riffs and energetic performances."
    }

};


// GET SELECTED ALBUM FROM URL

var params = new URLSearchParams(window.location.search);

var selectedAlbum = params.get("album") || "nevermind";

var album = albums[selectedAlbum] || albums.nevermind;


// DISPLAY ALBUM DETAILS

document.getElementById("cover").src = album.cover;
document.getElementById("title").textContent = album.title;
document.getElementById("artist").textContent = "Artist: " + album.artist;
document.getElementById("genre").textContent = "Genre: " + album.genre;
document.getElementById("year").textContent = "Release Year: " + album.year;
document.getElementById("description").textContent = album.description;


// ADD ALBUM TO MY SHELF

function saveToShelf() {

    var savedItems = JSON.parse(localStorage.getItem("myShelf")) || [];

    var albumLink = "album-details.html?album=" + selectedAlbum;

    var alreadySaved = savedItems.some(function(item) {
        return item.link === albumLink;
    });

    if (alreadySaved) {
        alert("Already saved to My Shelf!");
        return;
    }

    savedItems.push({

        title: album.title,
        cover: album.cover,
        category: "Music Album",
        link: albumLink

    });

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    alert("Added to My Shelf!");

}


// REVIEWS FOR EACH ALBUM

var storageKey = "archiveAlbumReviews_" + selectedAlbum;

var reviews = JSON.parse(localStorage.getItem(storageKey)) || [];

var form = document.getElementById("reviewForm");

var reviewDisplay = document.getElementById("reviewDisplay");


function showReviews() {

    reviewDisplay.innerHTML = "";

    reviews.forEach(function(item) {

        var div = document.createElement("div");

        div.className = "saved-review";

        var heading = document.createElement("strong");

        heading.textContent = "Rating: " + item.rating + " / 5 ★";

        var paragraph = document.createElement("p");

        paragraph.textContent = item.text;

        div.appendChild(heading);

        div.appendChild(paragraph);

        reviewDisplay.appendChild(div);

    });

}


// SUBMIT REVIEW

form.addEventListener("submit", function(event) {

    event.preventDefault();

    var rating = document.querySelector('input[name="rating"]:checked');

    var reviewText = document.getElementById("review").value;

    if (!rating || reviewText.trim() === "") {

        document.getElementById("message").textContent =
            "Please select a rating and write a review.";

        return;

    }

    var newReview = {

        rating: rating.value,
        text: reviewText

    };

    reviews.push(newReview);

    localStorage.setItem(storageKey, JSON.stringify(reviews));

    document.getElementById("message").textContent = "Review submitted!";

    form.reset();

    showReviews();

});


showReviews();
