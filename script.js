let books = [];

fetch("books.json")
    .then(res => res.json())
    .then(data => {
        books = data;
        renderBooks(books);
    });

function renderBooks(bookArray) {

    const list = document.querySelector("#book-list");

    list.innerHTML = "";

    bookArray.forEach(book => {

        list.innerHTML += `
            <li>
                <a href="${book.link}" target="_blank">
                    <img src="${book.cover}">
                    <h2>${book.title}</h2>
                    <p>${book.description}</p>
                    <p>Author: ${book.author}</p>
                    <p>Category: ${book.category}</p>
                    <p>Available: ${book.available ? "🟢" : "🔴"}</p>
                </a>
            </li>
        `;

    });

}


const categories = document.querySelectorAll(".sidebar li");

categories.forEach(category => {
    category.addEventListener("click", () => {

        categories.forEach(c => c.classList.remove("active"));

        category.classList.add("active");
        selectedCategory = category.textContent.trim();

        updateBooks();

    });

});

const search = document.querySelector(".search");

search.addEventListener("input", () => {

    searchText = search.value.toLowerCase();

    updateBooks();

});

let selectedCategory = "All";
let searchText = "";

function updateBooks() {

    const filtered = books.filter(book => {

        const matchesSearch =

            book.title.toLowerCase().includes(searchText) ||

            book.author.toLowerCase().includes(searchText);

        const matchesCategory =

            selectedCategory === "All" ||

            book.category === selectedCategory ||

            book.subcategory === selectedCategory;


        return matchesSearch && matchesCategory;

    });

    renderBooks(filtered);

}