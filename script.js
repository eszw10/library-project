let library = [];

const container = document.getElementById('container');
const submit = document.getElementById('submit')

//form
submit.addEventListener('click',(event)=> {
    event.preventDefault();
    if(getBook() === undefined) {
        return
    } else {
        library.push(getBook());
    }
    console.log(library)
    addCard(library[library.length-1])
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
    if(title === '' || author === '' || page === '') {
        alert('please fill the form correctly!')
    } else {
        return new Book(title,author,page,read)
    }
}

function addCard(obj){
    //define variable stage
    const card = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src','book.jpg')
    let judul = document.createElement('h3');
    judul.textContent = obj.title;
    let penulis = document.createElement('p');
    penulis.textContent = `by : ${obj.author}`;
    let halaman = document.createElement('p');
    halaman.textContent = `${obj.pages} pages`;
    let del = document.createElement('i');
    let icon = document.createElement('div');
    icon.classList.add('icon');
    let read = document.createElement('i');
    del.setAttribute('class','fa-solid fa-trash');
    del.style.color = 'red';

    //Check wether user already read the book or not
    obj.isRead === true? read.setAttribute('class','fa-solid fa-check'):read.setAttribute('class','fa-solid fa-xmark');
    obj.isRead === true? read.style.color = 'green':read.style.color='red'

    //toggle read script
    read.addEventListener('click',()=> {
        obj.isRead = !obj.isRead;
        if(obj.isRead === false) {
            read.removeAttribute('class')
            read.setAttribute('class','fa-solid fa-xmark');
            read.style.color='red'
        } else {
            read.removeAttribute('class')
            read.setAttribute('class','fa-solid fa-check');
            read.style.color='green'
        }
        console.log(obj.isRead)
    })

    //append stage
    icon.appendChild(read);
    icon.appendChild(del);
    card.appendChild(img)
    card.appendChild(judul);
    card.appendChild(penulis);
    card.appendChild(halaman);
    card.appendChild(icon)
    card.classList.add('card')
    container.appendChild(card);

    //delete function
    del.addEventListener('click', ()=> {
        console.log(library.indexOf(obj));
        let curr = library.indexOf(obj);
        container.removeChild(container.children[curr]);
        library.splice(curr,1);
    })
}


