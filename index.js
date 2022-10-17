function fetchBooks() {
return fetch("https://anapioficeandfire.com/api/books")

 .then((response) => {
  return response.json()

 })
 .then((json) => {
  console.log(json)
 renderBooks(json)
 })
}

function renderBooks(books) {
  const main = document.querySelector('main'); //identify DOM
  books.forEach(book => {  //iterate over all books
    const h2 = document.createElement('h2');  //create element
    const pisbn = document.createElement('p');  //create element
    h2.innerText = book.name;  
    pisbn.innerText = book.isbn;
    const pcharacters = document.createElement('p'); //create element
    pcharacters.innerText = book.characters;
    h2.appendChild(pcharacters);
    main.appendChild(h2);
    h2.appendChild(pisbn);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); {}
});