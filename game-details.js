
const games = {

    minecraft: {
        title: "Minecraft",
        developer: "Mojang Studios",
        genre: "Sandbox / Adventure",
        year: "2011",
        cover: "minecraft.jpg",
        description: "Explore, build and create your own world in a game filled with endless possibilities."
    },

    zelda: {
        title: "The Legend of Zelda",
        developer: "Nintendo",
        genre: "Action / Adventure",
        year: "1986",
        cover: "zelda.jpg",
        description: "Join Link on adventures across Hyrule as he explores dungeons and solves puzzles."
    },

    supermario: {
        title: "Super Mario",
        developer: "Nintendo",
        genre: "Platformer / Adventure",
        year: "1985",
        cover: "mario.jpg",
        description: "Help Mario travel through colourful worlds and overcome obstacles on his adventures."
    },

    gtav: {
        title: "Grand Theft Auto V",
        developer: "Rockstar Games",
        genre: "Action / Adventure",
        year: "2013",
        cover: "gta.jpg",
        description: "Explore the fictional city of Los Santos through the connected stories of three characters."
    },

    stardew: {
        title: "Stardew Valley",
        developer: "ConcernedApe",
        genre: "Simulation / Role-playing",
        year: "2016",
        cover: "stardew.jpg",
        description: "Build a new life in the countryside by farming, exploring and getting to know the local community."
    },

    portal: {
        title: "Portal 2",
        developer: "Valve",
        genre: "Puzzle / Platformer",
        year: "2011",
        cover: "portal.jpg",
        description: "Solve creative puzzles using a special portal device in a mysterious testing facility."
    },

    reddead: {
        title: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        genre: "Action / Adventure",
        year: "2018",
        cover: "redead.jpg",
        description: "Experience an open-world adventure set in the American frontier during the late 1800s."
    },

    thelastofus: {
        title: "The Last of Us",
        developer: "Naughty Dog",
        genre: "Action / Adventure",
        year: "2013",
        cover: "thelastofus.jpg",
        description: "A journey across a changed world explores survival, friendship and difficult choices."
    },

    undertale: {
        title: "Undertale",
        developer: "Toby Fox",
        genre: "Role-playing / Indie",
        year: "2015",
        cover: "undertale.jpg",
        description: "Explore an underground world filled with unusual characters and choices that shape your journey."
    },

    lifeisstrange: {
        title: "Life is Strange",
        developer: "Dontnod Entertainment",
        genre: "Adventure / Drama",
        year: "2015",
        cover: "lifeisstrange.jpg",
        description: "A student discovers an unexpected ability that changes how she experiences events around her."
    }

};


// GET SELECTED GAME

const selectedGame =
    new URLSearchParams(window.location.search).get("game") || "minecraft";

const game = games[selectedGame] || games.minecraft;


// DISPLAY GAME INFORMATION

document.getElementById("title").textContent = game.title;

document.getElementById("developer").textContent =
    "Developer: " + game.developer;

document.getElementById("genre").textContent =
    "Genre: " + game.genre;

document.getElementById("year").textContent =
    "Year: " + game.year;

document.getElementById("description").textContent =
    game.description;

document.getElementById("cover").src = game.cover;

document.getElementById("cover").alt = game.title;


// SAVE GAME TO MY SHELF

function saveToShelf() {

    const savedItems =
        JSON.parse(localStorage.getItem("myShelf")) || [];

    const gameLink =
        "game-details.html?game=" + selectedGame;

    const alreadySaved = savedItems.some(function(item) {
        return item.link === gameLink;
    });

    if (alreadySaved) {
        alert("Already saved to My Shelf!");
        return;
    }

    savedItems.push({

        title: game.title,
        cover: game.cover,
        category: "Video Game",
        link: gameLink

    });

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    alert("Added to My Shelf!");

}


// PLAYER REVIEWS

const reviewForm = document.getElementById("reviewForm");

const reviewDisplay = document.getElementById("reviewDisplay");

const storageKey = "archiveGameReviews_" + selectedGame;


// DISPLAY REVIEWS

function showReviews() {

    const reviews =
        JSON.parse(localStorage.getItem(storageKey)) || [];

    reviewDisplay.innerHTML = "<h3>Player Reviews</h3>";

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


// SUBMIT REVIEW

reviewForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const rating =
        document.querySelector('input[name="rating"]:checked');

    const review =
        document.getElementById("review").value;

    const message =
        document.getElementById("message");

    if (!rating || review.trim() === "") {

        message.textContent =
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

    message.textContent = "Your review has been added!";

    reviewForm.reset();

    showReviews();

});


showReviews();
