fetch("books.json")
.then(res => res.json())
.then(books => {

    const list = document.querySelector(".main ul");

    books.forEach(book => {

        list.innerHTML += `
            <li>
                <a href="${book.link}" target="_blank">
                    <img src="${book.cover}">
                    <h2>${book.title}</h2>
                    <p>${book.description}</p>
                </a>
            </li>
        `;

    });

});