const mongodb = require('mongoose');

const Schema = mongodb.Schema;

const ratingSchema = new Schema({
    userID: String,
    ISBN: String,
    bookRating: Number
});

const Rating = mongodb.model("Rating", ratingSchema);

module.exports = Rating;