const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? 'Yes' : 'No';
}

function addBookToLibrary(event) {
  event.preventDefault();

  // get form input values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  // create new book and add to library
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  // reset the form
  document.getElementById('book-form').reset();

  // re-render the library table
  renderLibrary();
}

function renderLibrary() {
  const tableBody = document.querySelector('#library-table tbody');
  tableBody.innerHTML = ''; // clear previous rows

  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td>
        <button onclick="removeBook(${index})">Remove</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}
