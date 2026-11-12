
function displayShelf() {

    const savedItems = JSON.parse(localStorage.getItem("myShelf")) || [];

    const container = document.getElementById("savedItems");

    container.innerHTML = "";

    if (savedItems.length === 0) {
        container.innerHTML =
            '<p class="empty-message">Your shelf is empty. Explore The Archive and save something!</p>';
        return;
    }

    savedItems.forEach(function(item, index) {

        const card = document.createElement("div");
        card.className = "saved-item";

        card.innerHTML = `
            <a href="${item.link}">
                <img src="${item.cover}" alt="${item.title}">
                <h3>${item.title}</h3>
            </a>
            <p>${item.category}</p>
            <button class="remove-button" onclick="removeItem(${index})">
                Remove
            </button>
        `;

        container.appendChild(card);

    });
}


function removeItem(index) {

    const savedItems = JSON.parse(localStorage.getItem("myShelf")) || [];

    savedItems.splice(index, 1);

    localStorage.setItem("myShelf", JSON.stringify(savedItems));

    displayShelf();
}


displayShelf();
