
const movies = {

    interstellar: {
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction / Adventure",
        year: "2014",
        cover: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars."
    },

    darkknight: {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        genre: "Action / Crime",
        year: "2008",
        cover: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces a new challenge when the Joker brings chaos to Gotham City."
    },

    inception: {
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction / Thriller",
        year: "2010",
        cover: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief enters people's dreams to steal secrets and is given an unusual mission."
    },

    titanic: {
        title: "Titanic",
        director: "James Cameron",
        genre: "Romance / Drama",
        year: "1997",
        cover: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "Two people from different backgrounds meet aboard the famous ocean liner Titanic."
    },

    jurassic: {
        title: "Jurassic Park",
        director: "Steven Spielberg",
        genre: "Science Fiction / Adventure",
        year: "1993",
        cover: "https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg",
        description: "A theme park featuring genetically recreated dinosaurs becomes the setting for an unexpected adventure."
    },

    matrix: {
        title: "The Matrix",
        director: "The Wachowskis",
        genre: "Science Fiction / Action",
        year: "1999",
        cover: "https://image.tmdb.org/t/p/w500/p96dm7sCMn4VYAStA6siNz30G1r.jpg",
        description: "A computer programmer discovers that the world he knows is not what it seems."
    },

    pulpfiction: {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        genre: "Crime / Drama",
        year: "1994",
        cover: "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
        description: "Several connected stories unfold in the criminal world of Los Angeles."
    },

    grandbudapest: {
        title: "The Grand Budapest Hotel",
        director: "Wes Anderson",
        genre: "Comedy / Adventure",
        year: "2014",
        cover: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        description: "A hotel concierge and his young assistant become involved in a mystery surrounding a valuable painting."
    },

    spiderman: {
        title: "Spider-Man: Into the Spider-Verse",
        director: "Bob Persichetti, Peter Ramsey and Rodney Rothman",
        genre: "Animation / Action",
        year: "2018",
        cover: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        description: "Miles Morales discovers his powers and meets Spider-People from different dimensions."
    },

    laland: {
        title: "La La Land",
        director: "Damien Chazelle",
        genre: "Musical / Romance",
        year: "2016",
        cover: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        description: "An aspiring actress and a jazz musician pursue their dreams while building a relationship in Los Angeles."
    }

};


// GET SELECTED MOVIE

const selectedMovie =
    new URLSearchParams(window.location.search).get("movie") || "interstellar";

const movie = movies[selectedMovie] || movies.interstellar;


// DISPLAY MOVIE INFORMATION

document.getElementById("title").textContent = movie.title;

document.getElementById("director").textContent =
    "Director: " + movie.director;

document.getElementById("genre").textContent =
    "Genre: " + movie.genre;

document.getElementById("year").textContent =
    "Year: " + movie.year;

document.getElementById("description").textContent =
    movie.description;

document.getElementById("cover").src = movie.cover;

document.getElementById("cover").alt = movie.title;


// SAVE MOVIE TO MY SHELF

function saveToShelf() {

    const savedItems =
        JSON.parse(localStorage.getItem("myShelf")) || [];

    const movieLink =
        "movie-details.html?movie=" + selectedMovie;

    const alreadySaved = savedItems.some(function(item) {
        return item.link === movieLink;
    });

    if (alreadySaved) {

        alert("Already saved to My Shelf!");

        return;
    }

    savedItems.push({

        title: movie.title,

        cover: movie.cover,

        category: "Movie",

        link: movieLink

    });

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    alert("Added to My Shelf!");

}


// MOVIE REVIEW SYSTEM

const reviewForm = document.getElementById("reviewForm");

const reviewDisplay = document.getElementById("reviewDisplay");

const storageKey = "archiveMovieReviews_" + selectedMovie;


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


// SAVE A REVIEW

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
