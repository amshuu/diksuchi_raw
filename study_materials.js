document.addEventListener("DOMContentLoaded", function() {
    // Mock data for available books
    const availableBooks = [
        { bookName: "Book 1", sellerName: "Seller A", image: "https://qph.cf2.quoracdn.net/main-qimg-4d98cb84e44ddfb3160ed36e52d014e6-lq" },
        { bookName: "Book 2", sellerName: "Seller B", image: "https://www.amitbookdepot.com/public//uploads/products/photos/97893837471918.jpg" },
        { bookName: "Book 3", sellerName: "Seller C", image: "https://prastutibooks.com/cdn/shop/products/me.jpg?v=1670863618" }
    ];

    // Display available books
    const availableBooksDiv = document.getElementById("available-books");
    availableBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-item");
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.bookName}">
            <p><strong>${book.bookName}</strong> (Sold by ${book.sellerName})</p>`;
        availableBooksDiv.appendChild(bookDiv);
    });

    // Sell Book form submission
    const sellBookForm = document.getElementById("sell-book-form");
    sellBookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const bookName = document.getElementById("book-name").value;
        const sellerName = document.getElementById("seller-name").value;
        // Add logic to handle selling book
        console.log(`Book "${bookName}" sold by ${sellerName}`);
        // Clear form fields
        sellBookForm.reset();
    });

    // Ask for Book form submission
    const askBookForm = document.getElementById("ask-book-form");
    askBookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const requestedBook = document.getElementById("requested-book").value;
        // Add logic to handle asking for book
        console.log(`Requested book: ${requestedBook}`);
        // Clear form field
        askBookForm.reset();
    });
});
