
let currentPage = 1;

const booksPerPage = 5;

const books = Array.from(
    document.querySelectorAll(".book-card")
);

const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");

const pageNumber = document.getElementById("pageNumber");
const bookCount = document.getElementById("bookCount");
const noResults = document.getElementById("noResults");

function displayBooks() {

    let search = searchInput.value.toLowerCase();
    let genre = genreFilter.value;

    let filteredBooks = books.filter(book => {

        let text = book.innerText.toLowerCase();
        let categories = book.dataset.genre;

        let matchesSearch = text.includes(search);

        let matchesGenre =
            genre === "all" || categories.includes(genre);

        return matchesSearch && matchesGenre;
    });

    let totalPages = Math.max(
        1,
        Math.ceil(filteredBooks.length / booksPerPage)
    );

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    books.forEach(book => {
        book.style.display = "none";
    });

    let start = (currentPage - 1) * booksPerPage;
    let end = start + booksPerPage;

    filteredBooks.slice(start, end).forEach(book => {
        book.style.display = "block";
    });

    pageNumber.innerText = currentPage + " / " + totalPages;

    bookCount.innerText =
        filteredBooks.length + " BOOKS IN COLLECTION";

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    noResults.style.display =
        filteredBooks.length === 0 ? "block" : "none";
}

searchInput.addEventListener("input", () => {
    currentPage = 1;
    displayBooks();
});

genreFilter.addEventListener("change", () => {
    currentPage = 1;
    displayBooks();
});

nextButton.addEventListener("click", () => {
    currentPage++;
    displayBooks();
});

prevButton.addEventListener("click", () => {
    currentPage--;
    displayBooks();
});

displayBooks();

document.getElementById("reviewForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked');
    const review = document.getElementById("review").value;

    if (!rating || review.trim() === "") {
        document.getElementById("message").textContent =
            "Please select a rating and write a review.";
        return;
    }

    document.getElementById("message").textContent =
        "Thank you! Your review has been submitted.";

    this.reset();

});

var archiveItems = [

    // BOOKS
    {name: "The Great Gatsby", category: "Book", link: "book-details.html?book=gatsby"},
    {name: "Pride and Prejudice", category: "Book", link: "book-details.html?book=pride"},
    {name: "Norwegian Wood", category: "Book", link: "book-details.html?book=norwegian"},
    {name: "The Alchemist", category: "Book", link: "book-details.html?book=alchemist"},
    {name: "To Kill a Mockingbird", category: "Book", link: "book-details.html?book=mockingbird"},
    {name: "And Then There Were None", category: "Book", link: "book-details.html?book=mystery"},
    {name: "Harry Potter", category: "Book", link: "book-details.html?book=potter"},
    {name: "1984", category: "Book", link: "book-details.html?book=nineteen"},
    {name: "The Hobbit", category: "Book", link: "book-details.html?book=hobbit"},
    {name: "Little Women", category: "Book", link: "book-details.html?book=littlewomen"},

    // MOVIES
    {name: "Interstellar", category: "Movie", link: "movie-details.html?movie=interstellar"},
    {name: "The Dark Knight", category: "Movie", link: "movie-details.html?movie=darkknight"},
    {name: "Inception", category: "Movie", link: "movie-details.html?movie=inception"},
    {name: "Titanic", category: "Movie", link: "movie-details.html?movie=titanic"},
    {name: "Jurassic Park", category: "Movie", link: "movie-details.html?movie=jurassic"},
    {name: "The Matrix", category: "Movie", link: "movie-details.html?movie=matrix"},
    {name: "Pulp Fiction", category: "Movie", link: "movie-details.html?movie=pulpfiction"},
    {name: "The Grand Budapest Hotel", category: "Movie", link: "movie-details.html?movie=grandbudapest"},
    {name: "Spider-Man: Into the Spider-Verse", category: "Movie", link: "movie-details.html?movie=spiderman"},
    {name: "La La Land", category: "Movie", link: "movie-details.html?movie=laland"},

    // TV SHOWS
    {name: "Friends", category: "TV Show", link: "tv-details.html?show=friends"},
    {name: "Breaking Bad", category: "TV Show", link: "tv-details.html?show=breakingbad"},
    {name: "Stranger Things", category: "TV Show", link: "tv-details.html?show=strangerthings"},
    {name: "The Office", category: "TV Show", link: "tv-details.html?show=theoffice"},
    {name: "Sherlock", category: "TV Show", link: "tv-details.html?show=sherlock"},
    {name: "Game of Thrones", category: "TV Show", link: "tv-details.html?show=gameofthrones"},
    {name: "The Big Bang Theory", category: "TV Show", link: "tv-details.html?show=bigbang"},
    {name: "Brooklyn Nine-Nine", category: "TV Show", link: "tv-details.html?show=brooklyn"},
    {name: "The Vampire Diaries", category: "TV Show", link: "tv-details.html?show=vampirediaries"},
    {name: "Wednesday", category: "TV Show", link: "tv-details.html?show=wednesday"},

    // ANIME
    {name: "Spirited Away", category: "Anime", link: "anime-details.html?anime=spirited"},
    {name: "Your Name", category: "Anime", link: "anime-details.html?anime=yourname"},
    {name: "Death Note", category: "Anime", link: "anime-details.html?anime=deathnote"},
    {name: "Demon Slayer", category: "Anime", link: "anime-details.html?anime=demonslayer"},
    {name: "Attack on Titan", category: "Anime", link: "anime-details.html?anime=attack"},
    {name: "Howl's Moving Castle", category: "Anime", link: "anime-details.html?anime=howl"},
    {name: "One Piece", category: "Anime", link: "anime-details.html?anime=onepiece"},
    {name: "Naruto", category: "Anime", link: "anime-details.html?anime=naruto"},
    {name: "Haikyuu", category: "Anime", link: "anime-details.html?anime=haikyuu"},
    {name: "Jujutsu Kaisen", category: "Anime", link: "anime-details.html?anime=jujutsu"},

    // VIDEO GAMES
    {name: "Minecraft", category: "Game", link: "game-details.html?game=minecraft"},
    {name: "The Legend of Zelda", category: "Game", link: "game-details.html?game=zelda"},
    {name: "Super Mario", category: "Game", link: "game-details.html?game=supermario"},
    {name: "Grand Theft Auto V", category: "Game", link: "game-details.html?game=gtav"},
    {name: "Stardew Valley", category: "Game", link: "game-details.html?game=stardew"},
    {name: "Portal", category: "Game", link: "game-details.html?game=portal"},
    {name: "Red Dead Redemption", category: "Game", link: "game-details.html?game=reddead"},
    {name: "The Last of Us", category: "Game", link: "game-details.html?game=thelastofus"},
    {name: "Undertale", category: "Game", link: "game-details.html?game=undertale"},
    {name: "Life is Strange", category: "Game", link: "game-details.html?game=lifeisstrange"},

    // MUSIC ALBUMS
    {name: "Nevermind", category: "Music", link: "album-details.html?album=nevermind"},
    {name: "Metallica", category: "Music", link: "album-details.html?album=metallica"},
    {name: "Thriller", category: "Music", link: "album-details.html?album=thriller"},
    {name: "Appetite for Destruction", category: "Music", link: "album-details.html?album=appetite"},
    {name: "A Night at the Opera", category: "Music", link: "album-details.html?album=queen"},
    {name: "The Dark Side of the Moon", category: "Music", link: "album-details.html?album=darkside"},
    {name: "Abbey Road", category: "Music", link: "album-details.html?album=abbeyroad"},
    {name: "Rumours", category: "Music", link: "album-details.html?album=rumours"},
    {name: "AM", category: "Music", link: "album-details.html?album=am"},
    {name: "Back in Black", category: "Music", link: "album-details.html?album=backinblack"},

    // COMICS
    {name: "Batman: Year One", category: "Comic", link: "comic-details.html?comic=batman"},
    {name: "Watchmen", category: "Comic", link: "comic-details.html?comic=watchmen"},
    {name: "The Killing Joke", category: "Comic", link: "comic-details.html?comic=killingjoke"},
    {name: "Spider-Man: Blue", category: "Comic", link: "comic-details.html?comic=spiderman"},
    {name: "Civil War", category: "Comic", link: "comic-details.html?comic=civilwar"},
    {name: "The Infinity Gauntlet", category: "Comic", link: "comic-details.html?comic=infinity"},
    {name: "Superman: Red Son", category: "Comic", link: "comic-details.html?comic=superman"},
    {name: "The Sandman", category: "Comic", link: "comic-details.html?comic=sandman"},
    {name: "V for Vendetta", category: "Comic", link: "comic-details.html?comic=vendetta"},
    {name: "X-Men: Days of Future Past", category: "Comic", link: "comic-details.html?comic=daysfuture"}

];


function searchArchive() {

    var input = document.getElementById("searchInput").value.toLowerCase();

    var results = document.getElementById("searchResults");

    results.innerHTML = "";

    if (input.trim() === "") {
        results.textContent = "Please enter something to search.";
        return;
    }

    var found = archiveItems.filter(function(item) {
        return item.name.toLowerCase().includes(input);
    });

    if (found.length === 0) {
        results.textContent = "No results found in The Archive.";
        return;
    }

    found.forEach(function(item) {

        var div = document.createElement("div");
        div.className = "search-result";

        var link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.name;

        var category = document.createElement("p");
        category.textContent = item.category;

        div.appendChild(link);
        div.appendChild(category);

        results.appendChild(div);

    });
document.getElementById("searchInput").addEventListener("input", searchArchive);
}
