const myLibrary = [];

function Book(title, author, numOfPages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, numOfPages, readStatus) {
  const book = new Book(title, author, numOfPages, readStatus);

  myLibrary.push(book);
}

addBookToLibrary("Count of monte carlo", "Alexandar dumas", "600", false);

addBookToLibrary("Harry Potter", "J. K. Rowling", "400", true);

addBookToLibrary("Atomic Habits", "James Clear", "200", true);

// const libraryContainer = document.querySelector(".library-container");

// function displayBooks() {
//   libraryContainer.innerHTML = "";

//   myLibrary.forEach((book) => {
//     const bookCard = document.createElement("div");
//     const h2 = document.createElement("h2");

//     bookCard.classList.add("book-card");

//     h2.innerText = book.title;
//     bookCard.append(h2);

//     libraryContainer.append(bookCard);
//   });
// }

// displayBooks();
