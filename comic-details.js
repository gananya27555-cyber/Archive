
var comics = {

    batman: {
        title: "Batman: Year One",
        publisher: "DC Comics",
        writer: "Frank Miller",
        genre: "Superhero / Crime",
        year: "1987",
        cover: "images/batman-year-one.jpg",
        description: "A retelling of Batman's early days in Gotham City, following Bruce Wayne as he begins his journey as a crime fighter."
    },

    watchmen: {
        title: "Watchmen",
        publisher: "DC Comics",
        writer: "Alan Moore",
        genre: "Superhero / Mystery",
        year: "1986",
        cover: "images/watchmen.jpg",
        description: "A story set in an alternate world where retired superheroes become involved in a mysterious investigation."
    },

    killingjoke: {
        title: "The Killing Joke",
        publisher: "DC Comics",
        writer: "Alan Moore",
        genre: "Superhero / Psychological",
        year: "1988",
        cover: "images/killing-joke.jpg",
        description: "A famous Batman and Joker story that explores their complicated rivalry and contrasting views of the world."
    },

    spiderman: {
        title: "Spider-Man: Blue",
        publisher: "Marvel Comics",
        writer: "Jeph Loeb",
        genre: "Superhero / Drama",
        year: "2002",
        cover: "images/spider-man-blue.jpg",
        description: "Peter Parker looks back on his early days as Spider-Man and remembers the people who shaped his life."
    },

    civilwar: {
        title: "Civil War",
        publisher: "Marvel Comics",
        writer: "Mark Millar",
        genre: "Superhero / Action",
        year: "2006",
        cover: "images/civil-war.jpg",
        description: "A major Marvel storyline in which superheroes disagree over government registration and become divided into opposing sides."
    },

    infinity: {
        title: "The Infinity Gauntlet",
        publisher: "Marvel Comics",
        writer: "Jim Starlin",
        genre: "Superhero / Science Fiction",
        year: "1991",
        cover: "images/infinity-gauntlet.jpg",
        description: "Thanos gains immense power through the Infinity Gems, leading Earth's heroes into a battle to protect the universe."
    },

    superman: {
        title: "Superman: Red Son",
        publisher: "DC Comics",
        writer: "Mark Millar",
        genre: "Superhero / Alternate History",
        year: "2003",
        cover: "images/superman-red-son.jpg",
        description: "An alternate take on Superman that imagines what might happen if his spaceship landed in the Soviet Union."
    },

    sandman: {
        title: "The Sandman: Preludes & Nocturnes",
        publisher: "DC / Vertigo",
        writer: "Neil Gaiman",
        genre: "Fantasy / Dark Fantasy",
        year: "1989",
        cover: "images/sandman.jpg",
        description: "The first collection in The Sandman series, introducing Dream and his journey to recover what he has lost."
    },

    vendetta: {
        title: "V for Vendetta",
        publisher: "DC / Vertigo",
        writer: "Alan Moore",
        genre: "Dystopian / Political Fiction",
        year: "1988",
        cover: "images/v-for-vendetta.jpg",
        description: "A dystopian story set in a future Britain under an authoritarian government, following a mysterious masked figure."
    },

    daysfuture: {
        title: "X-Men: Days of Future Past",
        publisher: "Marvel Comics",
        writer: "Chris Claremont",
        genre: "Superhero / Science Fiction",
        year: "1981",
        cover: "images/days-of-future-past.jpg",
        description: "A classic X-Men storyline that explores a future where mutants face persecution and the team tries to change history."
    }

};


// GET SELECTED COMIC

var params = new URLSearchParams(window.location.search);

var selectedComic = params.get("comic") || "batman";

var comic = comics[selectedComic] || comics.batman;


// DISPLAY COMIC INFORMATION

document.getElementById("cover").src = comic.cover;
document.getElementById("cover").alt = comic.title;

document.getElementById("title").textContent = comic.title;

document.getElementById("publisher").textContent =
    "Publisher: " + comic.publisher;

document.getElementById("writer").textContent =
    "Writer: " + comic.writer;

document.getElementById("genre").textContent =
    "Genre: " + comic.genre;

document.getElementById("year").textContent =
    "Release Year: " + comic.year;

document.getElementById("description").textContent =
    comic.description;


// SAVE COMIC TO MY SHELF

function saveToShelf() {

    var savedItems =
        JSON.parse(localStorage.getItem("myShelf")) || [];

    var comicLink =
        "comic-details.html?comic=" + selectedComic;

    var alreadySaved = savedItems.some(function(item) {
        return item.link === comicLink;
    });

    if (alreadySaved) {
        alert("Already saved to My Shelf!");
        return;
    }

    savedItems.push({

        title: comic.title,
        cover: comic.cover,
        category: "Comic",
        link: comicLink

    });

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    alert("Added to My Shelf!");

}


// COMIC REVIEWS

var storageKey = "archiveComicReviews_" + selectedComic;

var reviews =
    JSON.parse(localStorage.getItem(storageKey)) || [];

var form = document.getElementById("reviewForm");

var reviewDisplay = document.getElementById("reviewDisplay");


// DISPLAY REVIEWS

function showReviews() {

    reviewDisplay.innerHTML = "";

    reviews.forEach(function(item) {

        var div = document.createElement("div");

        div.className = "saved-review";

        var heading = document.createElement("strong");

        heading.textContent =
            "Rating: " + item.rating + " / 5 ★";

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

    var rating =
        document.querySelector('input[name="rating"]:checked');

    var reviewText =
        document.getElementById("review").value;

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

    localStorage.setItem(
        storageKey,
        JSON.stringify(reviews)
    );

    document.getElementById("message").textContent =
        "Review submitted!";

    form.reset();

    showReviews();

});


showReviews();
