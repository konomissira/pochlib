const myBooks = document.getElementById('myBooks');
const myFunction = () => {
    const myBtn = document.createElement("button");
    myBtn.classList.add("addBook");
    myBtn.innerText = "Ajouter un livre";
    const hr = document.querySelector('hr');
    myBooks.insertBefore(myBtn, hr);
    //console.log(1);
}
window.addEventListener('load', myFunction());
const addBook = document.querySelector('.addBook');

addBook.addEventListener('click', () => {
    const divForm = document.createElement('form');
    divForm.classList.add("myForm");
    const createForm = "Titre du livre:<br><input type='text' name='titre' class='titre' required><br>Auteur:<br><input type='text' name='auteur' class='auteur' required><br><input type='submit' class='rechercher' value='Rechercher'></input><br><button class='annuler'>Annuler</button>";
    divForm.innerHTML += createForm;
    divForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("submit");
        const books = getBooks();
        console.log(books);
        /* const items = books.map(book => {
            console.log(book);
        }); */
    });
    addBook.style.display = "none";
    const hr = document.querySelector('hr');
    myBooks.insertBefore(divForm, hr);


    const cancel = document.querySelector('.annuler');
    cancel.addEventListener('click', () => {
    window.location.reload();
    });

});

async function getBooks() {
    /* const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDsbVgQyRmbeKrhY5Hnr3fezCeZ7BdibYU');
    const data = await response.json();
    return data; */

    const fetchPromise = fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDsbVgQyRmbeKrhY5Hnr3fezCeZ7BdibYU');
    fetchPromise
        .then((response) => {
            return response.json();
        })
        .then((books) =>{
            const id = books.items.map((book) =>{
                return book.id;
            }).join("\n");
            console.log(id);
        });
}
getBooks();