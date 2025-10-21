// /public/home/home.js

document.getElementById('button-users').addEventListener('click', () => {
    console.log("button1 clicked!");
    window.location.assign("/users/users.html");
});

document.getElementById('button-books').addEventListener('click', () => {
    console.log("button2 clicked!");
    window.location.assign("/books/books.html");
});
