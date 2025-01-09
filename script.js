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
      <td class="title">${book.title}</td>
      <td class="author">${book.author}</td>
      <td class="pages">${book.pages}</td>
      <td class="read">
        ${book.read}
        <button class="toggle-read" onclick="toggleRead(${index})">
          <i class="fa-solid ${book.read === 'Yes' ? 'fa-toggle-on' : 'fa-toggle-off'}"></i>
      </td>
      <td>
        <button class="remove" onclick="removeBook(${index})"><i class="fa-solid fa-xmark"></i></button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}

function toggleRead(index) {
  const book = myLibrary[index];
  book.read = book.read === 'Yes' ? 'No' : 'Yes';
  renderLibrary();
}
