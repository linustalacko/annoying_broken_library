let array_of_books = [];

function Books(title, author, pages, read_status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read_status = read_status

    this.info = function() {
        array_of_books.push([this.title, this.author, this.pages, this.read_status]);
    }
}

const btn = document.querySelector('#submitting');
btn.addEventListener('click', () => {
    let title = document.getElementById('book').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read_status = document.getElementById('read-status').value;
    let new_insert = new Books(title, author, pages, read_status);
    new_insert.info();
    add_book_to_library(array_of_books);
    array_of_books = [];
});


read_status_id = 1;

function add_book_to_library(array_of_books) {
    for (let i = 0; i < array_of_books.length; i++) {
        let element = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            let new_text = element.insertCell(j);
            let new_element = document.createTextNode(array_of_books[i][j]);
            new_text.appendChild(new_element);
        } 

        let hello = element.insertCell(4);
        let other = document.createElement('button');
        let read_status = array_of_books[i][3];
        other.id = read_status_id;

        if (read_status == 'yes') {
            other.innerHTML = 'Not Read';
        } else {
            other.innerHTML = 'Read';
        }

        other.onclick = function(event) {
            if (other.innerHTML == 'Read' ) {
                let updated = document.getElementById('bruh').rows[other.id].cells[3];
                updated.innerHTML = 'Yes';
                other.innerHTML = 'Not Read';
            } else if (other.innerHTML == 'Not Read') {
                let updated = document.getElementById('bruh').rows[other.id].cells[3];
                updated.innerHTML = 'No';
                other.innerHTML = 'Read';
            }
        }
        read_status_id += 1;
        hello.appendChild(other);


        let update = element.insertCell(-1);
        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        button.onclick = function(event) {
            document.getElementById('bruh').deleteRow(other.id);
            array_of_books.splice(i, 1);
        }
        update.appendChild(button);

        document.getElementById('bruh').appendChild(element);
    }
}

