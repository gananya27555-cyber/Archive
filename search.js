 
var archiveItems = [
    // BOOKS
    { name: "The Great Gatsby", category: "Books", link: "book-details.html?book=gatsby" },
    { name: "Pride and Prejudice", category: "Books", link: "book-details.html?book=pride" },
    { name: "Norwegian Wood", category: "Books", link: "book-details.html?book=norwegian" },
    { name: "The Alchemist", category: "Books", link: "book-details.html?book=alchemist" },
    { name: "To Kill a Mockingbird", category: "Books", link: "book-details.html?book=mockingbird" },
    { name: "And Then There Were None", category: "Books", link: "book-details.html?book=mystery" },
    { name: "Harry Potter", category: "Books", link: "book-details.html?book=potter" },
    { name: "1984", category: "Books", link: "book-details.html?book=nineteen" },
    { name: "The Hobbit", category: "Books", link: "book-details.html?book=hobbit" },
    { name: "Little Women", category: "Books", link: "book-details.html?book=littlewomen" },

    // MOVIES
    { name: "Interstellar", category: "Movies", link: "movie-details.html?movie=interstellar" },
    { name: "The Dark Knight", category: "Movies", link: "movie-details.html?movie=darkknight" },
    { name: "Inception", category: "Movies", link: "movie-details.html?movie=inception" },
    { name: "Titanic", category: "Movies", link: "movie-details.html?movie=titanic" },
    { name: "Jurassic Park", category: "Movies", link: "movie-details.html?movie=jurassic" },
    { name: "The Matrix", category: "Movies", link: "movie-details.html?movie=matrix" },
    { name: "Pulp Fiction", category: "Movies", link: "movie-details.html?movie=pulpfiction" },
    { name: "The Grand Budapest Hotel", category: "Movies", link: "movie-details.html?movie=grandbudapest" },
    { name: "Spider-Man: Into the Spider-Verse", category: "Movies", link: "movie-details.html?movie=spiderman" },
    { name: "La La Land", category: "Movies", link: "movie-details.html?movie=laland" },

    // TV SHOWS
    { name: "Friends", category: "TV Shows", link: "tv-details.html?show=friends" },
    { name: "Breaking Bad", category: "TV Shows", link: "tv-details.html?show=breakingbad" },
    { name: "Stranger Things", category: "TV Shows", link: "tv-details.html?show=strangerthings" },
    { name: "The Office", category: "TV Shows", link: "tv-details.html?show=theoffice" },
    { name: "Sherlock", category: "TV Shows", link: "tv-details.html?show=sherlock" },
    { name: "Game of Thrones", category: "TV Shows", link: "tv-details.html?show=gameofthrones" },
    { name: "The Big Bang Theory", category: "TV Shows", link: "tv-details.html?show=bigbang" },
    { name: "Brooklyn Nine-Nine", category: "TV Shows", link: "tv-details.html?show=brooklyn" },
    { name: "The Vampire Diaries", category: "TV Shows", link: "tv-details.html?show=vampirediaries" },
    { name: "Wednesday", category: "TV Shows", link: "tv-details.html?show=wednesday" },

    // ANIME AND MANGA
    { name: "Spirited Away", category: "Anime & Manga", link: "anime-details.html?anime=spirited" },
    { name: "Your Name", category: "Anime & Manga", link: "anime-details.html?anime=yourname" },
    { name: "Death Note", category: "Anime & Manga", link: "anime-details.html?anime=deathnote" },
    { name: "Demon Slayer", category: "Anime & Manga", link: "anime-details.html?anime=demonslayer" },
    { name: "Attack on Titan", category: "Anime & Manga", link: "anime-details.html?anime=attack" },
    { name: "Howl's Moving Castle", category: "Anime & Manga", link: "anime-details.html?anime=howl" },
    { name: "One Piece", category: "Anime & Manga", link: "anime-details.html?anime=onepiece" },
    { name: "Naruto", category: "Anime & Manga", link: "anime-details.html?anime=naruto" },
    { name: "Haikyuu", category: "Anime & Manga", link: "anime-details.html?anime=haikyuu" },
    { name: "Jujutsu Kaisen", category: "Anime & Manga", link: "anime-details.html?anime=jujutsu" },

    // VIDEO GAMES
    { name: "Minecraft", category: "Video Games", link: "game-details.html?game=minecraft" },
    { name: "The Legend of Zelda", category: "Video Games", link: "game-details.html?game=zelda" },
    { name: "Super Mario", category: "Video Games", link: "game-details.html?game=supermario" },
    { name: "Grand Theft Auto V", category: "Video Games", link: "game-details.html?game=gtav" },
    { name: "Stardew Valley", category: "Video Games", link: "game-details.html?game=stardew" },
    { name: "Portal", category: "Video Games", link: "game-details.html?game=portal" },
    { name: "Red Dead Redemption", category: "Video Games", link: "game-details.html?game=reddead" },
    { name: "The Last of Us", category: "Video Games", link: "game-details.html?game=thelastofus" },
    { name: "Undertale", category: "Video Games", link: "game-details.html?game=undertale" },
    { name: "Life is Strange", category: "Video Games", link: "game-details.html?game=lifeisstrange" },

    // MUSIC ALBUMS
    { name: "Nevermind", category: "Music Albums", link: "album-details.html?album=nevermind" },
    { name: "Metallica", category: "Music Albums", link: "album-details.html?album=metallica" },
    { name: "Thriller", category: "Music Albums", link: "album-details.html?album=thriller" },
    { name: "Appetite for Destruction", category: "Music Albums", link: "album-details.html?album=appetite" },
    { name: "A Night at the Opera", category: "Music Albums", link: "album-details.html?album=queen" },
    { name: "The Dark Side of the Moon", category: "Music Albums", link: "album-details.html?album=darkside" },
    { name: "Abbey Road", category: "Music Albums", link: "album-details.html?album=abbeyroad" },
    { name: "Rumours", category: "Music Albums", link: "album-details.html?album=rumours" },
    { name: "AM", category: "Music Albums", link: "album-details.html?album=am" },
    { name: "Back in Black", category: "Music Albums", link: "album-details.html?album=backinblack" },

    // COMICS
    { name: "Batman: Year One", category: "Comics", link: "comic-details.html?comic=batman" },
    { name: "Watchmen", category: "Comics", link: "comic-details.html?comic=watchmen" },
    { name: "The Killing Joke", category: "Comics", link: "comic-details.html?comic=killingjoke" },
    { name: "Spider-Man: Blue", category: "Comics", link: "comic-details.html?comic=spiderman" },
    { name: "Civil War", category: "Comics", link: "comic-details.html?comic=civilwar" },
    { name: "The Infinity Gauntlet", category: "Comics", link: "comic-details.html?comic=infinity" },
    { name: "Superman: Red Son", category: "Comics", link: "comic-details.html?comic=superman" },
    { name: "The Sandman: Preludes & Nocturnes", category: "Comics", link: "comic-details.html?comic=sandman" },
    { name: "V for Vendetta", category: "Comics", link: "comic-details.html?comic=vendetta" },
    { name: "X-Men: Days of Future Past", category: "Comics", link: "comic-details.html?comic=daysfuture" }
];

function searchArchive() {
    var input = document.getElementById("searchInput").value.toLowerCase().trim();
    var results = document.getElementById("searchResults");

    results.innerHTML = "";

    if (input === "") {
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
}

document.getElementById("searchInput").addEventListener("input", searchArchive);
