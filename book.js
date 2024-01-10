const mongodb = require('mongoose');

const Schema = mongodb.Schema;

const bookSchema = new Schema({
    ISBN: String,
    bookTitle: String,
    bookAuthor: String,
    publication: Number,
    publisher: String,
    imageURL_S: String,
    imageURL_M: String,
    imageURL_L: String
});

const Book = mongodb.model("Book", bookSchema);

module.exports = Book;