let myLibrary = [];

const addBookButton = document.querySelector("#new-book-button");
const bookForm = document.querySelector("#book-form");
const formOverlay = document.querySelector(".form-overlay");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

addBookButton.addEventListener("click", () => {
  formOverlay.classList.toggle("hidden");
});

formOverlay.addEventListener("click", (event) => {
  if (event.target === formOverlay) {
    formOverlay.classList.add("hidden");
    bookForm.reset();
  }
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
  formOverlay.classList.add("hidden");
});

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
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

    titleElement.textContent = book.title;
    authorElement.textContent = `${book.author}`;
    pagesElement.textContent = `${book.pages}`;
    statusElement.textContent = `${book.read ? "Read" : "Not Read"}`;
    removeButton.textContent = `Remove`;
    toggleButton.textContent = `Change Status`;

    removeButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((libraryBook) => libraryBook.id !== book.id);

      displayBooks();
    });

    toggleButton.addEventListener("click", () => {
      book.toggleReadStatus();

      displayBooks();
    });

    removeButton.classList.add("remove-btn");
    toggleButton.classList.add("toggle-btn");
    buttonContainer.classList.add("button-container");

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
