let library = [];

const container = document.getElementById('container');
const submit = document.getElementById('submit')
const add = document.getElementById('add')

//modal
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
    modal.addEventListener('mouseover', ()=> {
        modal.style.cursor = 'pointer'
    })
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

add.addEventListener('click', ()=> {
    modal.style.display = "block";
})

//form
submit.addEventListener('click',(event)=> {
    event.preventDefault();
    modal.style.display = "visible";
    library.push(getBook());
    console.log(library)
    for(const element of library) {
        addCard(element);
    }
})

//Object Book and function
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function getBook() {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let page = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    return new Book(title,author,page,read)
}

function addCard(obj){
    const card = document.createElement('div');
    let judul = document.createElement('p');
    judul.textContent = obj.title;
    let penulis = document.createElement('p');
    penulis.textContent = obj.author;
    let halaman = document.createElement('p');
    halaman.textContent = obj.pages
    card.appendChild(judul);
    card.appendChild(penulis);
    card.appendChild(halaman);
    container.appendChild(card);
}