// Inside your existing script.js

function searchBooks(event) {
    event.preventDefault(); // Prevent the form from submitting and page reload

    const searchInput = document.getElementById('searchInput').value.trim();

    console.log(searchInput);
    if (searchInput.length === 0) {
        // Clear and hide the search results container if the search input is empty
        return;
    }

    // Use AJAX to fetch search results from your server
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const results = JSON.parse(xhr.responseText);
            displayResults(results);
        }
    };

    xhr.open('GET', `/books/search?term=${searchInput}`, true);
    xhr.send();

    return false; // Prevent the form from submitting and page reload
}

function displayResults(results) {
    const books = document.getElementById('books');
    
    if (results.length > 0) {
        const html = results.map(result => {
            return `<div class="book">
            <img src="${result.imageURL_L}">
            <h2 class="book-title">${result.bookTitle}</h2>
                <div class="book-desc">
                    <h4 class="book-author"><span>Author:</span>${result.bookAuthor}</h4>
                    <h4 class="book-year-publish"><span>Date: </span>${result.publication}</h4>
                    <h4 class="book-publisher"><span>Publisher: </span>${result.publisher}</h4>
                    <h4 class="isbn"><span>ISBN: </span>${result.ISBN}</h4>
                </div>
            </h2>
        </div>`;
        }).join('');
        books.innerHTML = html;
    } else {
        books.innerHTML = `<h1>No Results Found.</h1>`;
        books.style.display = 'block';
    }
}
