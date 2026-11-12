
const animeList = {

    spirited: {
        title: "Spirited Away",
        creator: "Hayao Miyazaki",
        genre: "Fantasy / Adventure",
        year: "2001",
        cover: "away.jpg",
        description: "A young girl enters a mysterious world of spirits and must find her way back home."
    },

    yourname: {
        title: "Your Name",
        creator: "Makoto Shinkai",
        genre: "Romance / Fantasy",
        year: "2016",
        cover: "yourname.jpg",
        description: "Two teenagers mysteriously begin switching bodies and try to understand their unusual connection."
    },

    deathnote: {
        title: "Death Note",
        creator: "Tsugumi Ohba",
        genre: "Mystery / Thriller",
        year: "2006",
        cover: "deathnote.jpg",
        description: "A student discovers a mysterious notebook that gives its owner an unusual power."
    },

    demonslayer: {
        title: "Demon Slayer",
        creator: "Koyoharu Gotouge",
        genre: "Action / Fantasy",
        year: "2019",
        cover: "demon.jpg",
        description: "Tanjiro begins a journey to find a cure for his sister after a tragic event changes his family."
    },

    attack: {
        title: "Attack on Titan",
        creator: "Hajime Isayama",
        genre: "Action / Fantasy",
        year: "2013",
        cover: "attack.jpg",
        description: "Humanity struggles to survive in a world surrounded by enormous mysterious creatures."
    },

    howl: {
        title: "Howl's Moving Castle",
        creator: "Hayao Miyazaki",
        genre: "Fantasy / Romance",
        year: "2004",
        cover: "moving.jpg",
        description: "A young woman is transformed by a spell and finds herself in a magical moving castle."
    },

    onepiece: {
        title: "One Piece",
        creator: "Eiichiro Oda",
        genre: "Adventure / Fantasy",
        year: "1999",
        cover: "one.jpg",
        description: "Monkey D. Luffy and his crew sail across the seas in search of the legendary One Piece treasure."
    },

    naruto: {
        title: "Naruto",
        creator: "Masashi Kishimoto",
        genre: "Action / Adventure",
        year: "2002",
        cover: "naruto.jpg",
        description: "Naruto Uzumaki works towards his dream of becoming the strongest ninja and earning everyone's respect."
    },

    haikyuu: {
        title: "Haikyuu!!",
        creator: "Haruichi Furudate",
        genre: "Sports / Comedy",
        year: "2014",
        cover: "haikyuu.jpg",
        description: "A passionate young volleyball player joins his school team and works towards becoming a great player."
    },

    jujutsu: {
        title: "Jujutsu Kaisen",
        creator: "Gege Akutami",
        genre: "Action / Supernatural",
        year: "2020",
        cover: "juju.jpg",
        description: "Yuji Itadori enters the world of sorcerers after an unexpected encounter with a powerful cursed object."
    }

};


// GET SELECTED ANIME

const selectedAnime =
    new URLSearchParams(window.location.search).get("anime") || "spirited";

const anime = animeList[selectedAnime] || animeList.spirited;


// DISPLAY ANIME INFORMATION

document.getElementById("title").textContent = anime.title;
document.getElementById("creator").textContent =
    "Creator: " + anime.creator;

document.getElementById("genre").textContent =
    "Genre: " + anime.genre;

document.getElementById("year").textContent =
    "Year: " + anime.year;

document.getElementById("description").textContent =
    anime.description;

document.getElementById("cover").src = anime.cover;
document.getElementById("cover").alt = anime.title;


// SAVE ANIME TO MY SHELF

function saveToShelf() {

    const savedItems =
        JSON.parse(localStorage.getItem("myShelf")) || [];

    const animeLink =
        "anime-details.html?anime=" + selectedAnime;

    const alreadySaved = savedItems.some(function(item) {
        return item.link === animeLink;
    });

    if (alreadySaved) {
        alert("Already saved to My Shelf!");
        return;
    }

    savedItems.push({

        title: anime.title,

        cover: anime.cover,

        category: "Anime & Manga",

        link: animeLink

    });

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    alert("Added to My Shelf!");

}


// ANIME REVIEW SYSTEM

const reviewForm = document.getElementById("reviewForm");

const reviewDisplay = document.getElementById("reviewDisplay");

const storageKey = "archiveAnimeReviews_" + selectedAnime;


// DISPLAY REVIEWS

function showReviews() {

    const reviews =
        JSON.parse(localStorage.getItem(storageKey)) || [];

    reviewDisplay.innerHTML = "<h3>Viewer Reviews</h3>";

    if (reviews.length === 0) {
        reviewDisplay.innerHTML +=
            "<p>No reviews yet. Be the first!</p>";
    }

    reviews.forEach(function(item) {

        const box = document.createElement("div");

        box.className = "saved-review";

        const stars = document.createElement("p");

        stars.textContent =
            "Rating: " + "★".repeat(item.rating);

        const comment = document.createElement("p");

        comment.textContent = item.text;

        box.appendChild(stars);

        box.appendChild(comment);

        reviewDisplay.appendChild(box);

    });

}


// SAVE REVIEW

reviewForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const rating =
        document.querySelector('input[name="rating"]:checked');

    const review =
        document.getElementById("review").value;

    if (!rating || review.trim() === "") {

        document.getElementById("message").textContent =
            "Please select a rating and write a review.";

        return;
    }

    const reviews =
        JSON.parse(localStorage.getItem(storageKey)) || [];

    reviews.push({

        rating: Number(rating.value),

        text: review

    });

    localStorage.setItem(storageKey, JSON.stringify(reviews));

    document.getElementById("message").textContent =
        "Your review has been added!";

    reviewForm.reset();

    showReviews();

});


showReviews();
