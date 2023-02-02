const express = require('express');
const app = express()
const port = 3000;
const Book = require('./Book')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const bookRouter = express.Router();
app.use('/api', bookRouter)

app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})

app.listen(port, ()=>{
    console.log('Running on port '+port)
})

let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
            new Book(2, "Robinson Crusoe", "adventures", "Daniel Dafoe"),
            new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    .get((req, res)=>{
    let filteredBooks = [];
    if(req.query.genre){
        filteredBooks = books.filter(x=>x.genre==req.query.genre)
    }else{
        filteredBooks = books;
    }
    res.json(filteredBooks)
    })
    .post((req, res)=>{
    let newBook = new Book(req.body.id,
        req.body.name, req.body.genre,
        req.body.author)
    books.push(newBook);
    console.log(books);
    return res.json(newBook)
    })

app.get('/orderedBooks', (req,res)=>{
    res.json(books.sort((a, b)=>{if(a.name>b.name)return 1;
    else if (a.name < b.name) return -1;
else return 0;}))
})

bookRouter.route('/books/:bookId')
    .put((req,res)=>{
        bookModif = books.find(x=>x.id == req.params.bookId);
        index = books.indexOf(bookModif)
        bookModif.name = req.body.name;
        bookModif.genre = req.body.genre;
        bookModif.author = req.body.author;
        if(index !== -1)
            books[index] = bookModif
        return res.json(bookModif);
    })
    .delete((req, res)=>{
        books = books.filter(e=>e.id!=req.params.bookId)
        res.json(books)
    })

