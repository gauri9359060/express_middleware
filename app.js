const express = require("express")
const app = express();

const PORT = 8000;

const books = require("./books.json")

app.get("/books",(req,res,next)=>{
    console.log(books)
    res.json(books)
    next();
})

app.get("/books/:name",(req,res,next)=>{
    const {name} = req.params;

    const book = books.find((book)=> book.name === name);

    res.json(book)

})

app.listen(PORT,()=>{
    console.log(`Listening to Port No.${PORT}`)
})
