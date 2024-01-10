const express = require('express');
const Book = require('./book');
const Rating = require('./rating');
const router = express.Router();

//Create new Book
// router.post('./book', async (req, res)=>{
//     const { ISBN, bookTitle, bookAuthor, 
//         publication, publisher, imageURL_S, 
//         imageURL_M, imageURL_L } = req.body;

//         try {
//             const book = new Book({ ISBN, bookTitle, bookAuthor, 
//                 publication, publisher, imageURL_S, 
//                 imageURL_M, imageURL_L });
//             await book.save();
//             res.send(book);
//           } catch (error) {
//             console.error(error);
//             res.status(500).send(error);
//           }

// });
// Redirect to all books page
router.get('/', async (req, res)=>{
    res.redirect('/books');
})
// Get all books
router.get('/books', (req, res)=> {
    
    Book.find().sort({ bookTitle: 1 })
    .then((result)=>{
        Rating.find()
        .then((rating)=>{
            res.render('books', { result, rating });
        })
        .catch((err) => {console.log(err)});
        
    })
    .catch((err) => {console.log(err)});

});

// Inside your routes.js or wherever your server-side routes are defined

router.get('/books/search', async (req, res) => {
    const searchTerm = req.query.term;
    try {
      const results = await Book.find({
        $or: [
          { bookTitle: { $regex: searchTerm, $options: 'i' } },
          { bookAuthor: { $regex: searchTerm, $options: 'i' } },
          { publisher: { $regex: searchTerm, $options: 'i' } },
          // Add more fields if needed
        ]
      }).sort({ bookTitle: 1 });
  
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  



module.exports = router
