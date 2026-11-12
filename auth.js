
// CHECK THE CURRENT USER

function updateAccountLink() {

    const currentUser = localStorage.getItem("currentUser");

    const accountLinks = document.querySelectorAll('a[href="signin.html"]');

    accountLinks.forEach(function(link) {

        if (currentUser) {
            link.textContent = "Welcome, " + currentUser;
        } else {
            link.textContent = "Sign In";
        }

    });

}


// UPDATE THE SIGN IN LINK WHEN THE PAGE LOADS

updateAccountLink();
