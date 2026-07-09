let myLibrary = [];

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

const libraryContainer = document.querySelector(".library-container");

function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    const titleElement = document.createElement("h2");
    const authorElement = document.createElement("p");
    const pagesElement = document.createElement("p");
    const statusElement = document.createElement("p");
    const removeButton = document.createElement("button");
    const toggleButton = document.createElement("button");

    bookCard.classList.add("book-card");

    titleElement.innerText = book.title;
    authorElement.innerText = `Author : ${book.author}`;
    pagesElement.innerText = `Pages : ${book.numOfPages}`;
    statusElement.innerText = `Read Status : ${book.readStatus ? "Read" : "Not Read"}`;
    removeButton.innerText = `Remove`;
    toggleButton.innerText = `Change Status`;

    removeButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((libraryBook) => libraryBook.id !== book.id);

      displayBooks();
    });

    toggleButton.addEventListener("click", () => {
      book.readStatus = !book.readStatus;

      displayBooks();
    });

    bookCard.append(
      titleElement,
      authorElement,
      pagesElement,
      statusElement,
      removeButton,
      toggleButton,
    );

    libraryContainer.append(bookCard);
  });
}

displayBooks();
