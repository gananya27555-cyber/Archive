
const shows = {

    friends: {
        title: "Friends",
        creator: "David Crane and Marta Kauffman",
        genre: "Comedy / Sitcom",
        year: "1994",
        cover: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
        description: "Six friends navigate relationships, careers and everyday life while living in New York City.",
        related: [
            { name: "Joey", id: "joey" }
        ]
    },

    breakingbad: {
        title: "Breaking Bad",
        creator: "Vince Gilligan",
        genre: "Crime / Drama",
        year: "2008",
        cover: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        description: "A chemistry teacher makes a series of life-changing decisions after receiving difficult news.",
        related: [
            { name: "Better Call Saul", id: "bettercallsaul" },
            { name: "El Camino", id: "elcamino" }
        ]
    },

    strangerthings: {
        title: "Stranger Things",
        creator: "The Duffer Brothers",
        genre: "Science Fiction / Horror",
        year: "2016",
        cover: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        description: "A group of friends encounter mysterious events in the town of Hawkins.",
        related: []
    },

    theoffice: {
        title: "The Office",
        creator: "Greg Daniels",
        genre: "Comedy / Mockumentary",
        year: "2005",
        cover: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
        description: "A documentary-style comedy following the everyday lives of employees at a paper company.",
        related: []
    },

    sherlock: {
        title: "Sherlock",
        creator: "Mark Gatiss and Steven Moffat",
        genre: "Mystery / Crime",
        year: "2010",
        cover: "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
        description: "Sherlock Holmes and Dr Watson solve unusual mysteries in modern-day London.",
        related: []
    },

    gameofthrones: {
        title: "Game of Thrones",
        creator: "David Benioff and D. B. Weiss",
        genre: "Fantasy / Drama",
        year: "2011",
        cover: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
        description: "Noble families struggle for power in the fictional lands of Westeros.",
        related: [
            { name: "House of the Dragon", id: "houseofthedragon" }
        ]
    },

    bigbang: {
        title: "The Big Bang Theory",
        creator: "Chuck Lorre and Bill Prady",
        genre: "Comedy / Sitcom",
        year: "2007",
        cover: "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
        description: "A group of scientists and their friends navigate work, friendship and relationships.",
        related: [
            { name: "Young Sheldon", id: "youngsheldon" }
        ]
    },

    brooklyn99: {
        title: "Brooklyn Nine-Nine",
        creator: "Dan Goor and Michael Schur",
        genre: "Comedy / Police",
        year: "2013",
        cover: "nine.jpg",
        description: "A talented but playful detective and his colleagues work at a New York police precinct.",
        related: []
    },

    supernatural: {
        title: "Supernatural",
        creator: "Eric Kripke",
        genre: "Fantasy / Horror / Drama",
        year: "2005",
        cover: "supernatural.jpg",
        description: "Supernatural follows two brothers, Sam and Dean Winchester, who travel across America hunting supernatural creatures and investigating unexplained mysteries. Along their journey, they encounter ghosts, demons, monsters and powerful celestial beings while uncovering secrets about their family and destiny. Blending horror, fantasy, action and humour, the series explores themes of family, loyalty and sacrifice across fifteen seasons.",
        related: [
            { name: "The Originals", id: "theoriginals" },
            { name: "Legacies", id: "legacies" }
        ]
    },

    wednesday: {
        title: "Wednesday",
        creator: "Alfred Gough and Miles Millar",
        genre: "Mystery / Comedy",
        year: "2022",
        cover: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        description: "Wednesday Addams investigates mysterious events at Nevermore Academy.",
        related: []
    }
};


// Get selected show

const selectedShow =
    new URLSearchParams(window.location.search).get("show") || "friends";

const show = shows[selectedShow] || shows.friends;


// Display show information

document.getElementById("title").textContent = show.title;
document.getElementById("creator").textContent = "Created by: " + show.creator;
document.getElementById("genre").textContent = "Genre: " + show.genre;
document.getElementById("year").textContent = "Year: " + show.year;
document.getElementById("description").textContent = show.description;

document.getElementById("cover").src = show.cover;
// Save show to My Shelf

function saveToShelf() {

    const savedItems = JSON.parse(localStorage.getItem("myShelf")) || [];

    const alreadySaved = savedItems.some(function(item) {
        return item.link === "tv-details.html?show=" + selectedShow;
    });

    if (alreadySaved) {
        alert("Already saved to My Shelf!");
        return;
    }

    savedItems.push({
        title: show.title,
        cover: show.cover,
        category: "TV Show",
        link: "tv-details.html?show=" + selectedShow
    });

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    alert("Added to My Shelf!");
}
document.getElementById("cover").alt = show.title;


// Display related shows

const relatedContainer = document.getElementById("relatedShows");

if (show.related.length === 0) {
    relatedContainer.innerHTML = "<p>No related shows listed yet.</p>";
} else {
    show.related.forEach(function(item) {
        const link = document.createElement("a");

        link.textContent = item.name;
        link.href = "tv-details.html?show=" + item.id;

        relatedContainer.appendChild(link);
    });
}


// Review system

const reviewForm = document.getElementById("reviewForm");
const reviewDisplay = document.getElementById("reviewDisplay");

const storageKey = "archiveTVReviews_" + selectedShow;


function showReviews() {

    const reviews = JSON.parse(localStorage.getItem(storageKey)) || [];

    reviewDisplay.innerHTML = "<h3>Viewer Reviews</h3>";

    if (reviews.length === 0) {
        reviewDisplay.innerHTML += "<p>No reviews yet. Be the first!</p>";
    }

    reviews.forEach(function(item) {

        const box = document.createElement("div");
        box.className = "saved-review";

        const stars = document.createElement("p");
        stars.textContent = "Rating: " + "★".repeat(item.rating);

        const comment = document.createElement("p");
        comment.textContent = item.text;

        box.appendChild(stars);
        box.appendChild(comment);

        reviewDisplay.appendChild(box);

    });

}


// Save review

reviewForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked');
    const review = document.getElementById("review").value;

    if (!rating || review.trim() === "") {

        document.getElementById("message").textContent =
            "Please select a rating and write a review.";

        return;
    }

    const reviews = JSON.parse(localStorage.getItem(storageKey)) || [];

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
