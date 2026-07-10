let myLibrary = [];

const addBookButton = document.querySelector("#new-book-button");
const bookForm = document.querySelector(".form-container");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

addBookButton.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  bookForm.reset();
  bookForm.classList.add("hidden");
});

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);

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
    const buttonContainer = document.createElement("div");

    bookCard.classList.add("book-card");

    titleElement.innerText = book.title;
    authorElement.innerText = `${book.author}`;
    pagesElement.innerText = `${book.pages}`;
    statusElement.innerText = `${book.read ? "Read" : "Not Read"}`;
    removeButton.innerText = `Remove`;
    toggleButton.innerText = `Change Status`;

    removeButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((libraryBook) => libraryBook.id !== book.id);

      displayBooks();
    });

    toggleButton.addEventListener("click", () => {
      book.read = !book.read;

      displayBooks();
    });

    removeButton.classList.add("remove-btn");
    toggleButton.classList.add("toggle-btn");
    buttonContainer.classList.add("button-container");

    console.log(book.read, typeof book.read);
    if (book.read) {
      statusElement.classList.add("read");
    } else {
      statusElement.classList.add("not-read");
    }

    buttonContainer.append(removeButton, toggleButton);

    bookCard.append(
      titleElement,
      authorElement,
      pagesElement,
      statusElement,
      buttonContainer,
    );

    libraryContainer.append(bookCard);
  });
}

displayBooks();
