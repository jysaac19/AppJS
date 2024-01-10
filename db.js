const mongodb = require('mongoose');
const uri = "mongodb+srv://jerald814:EmeraldCity154@cluster0.haxudig.mongodb.net/Library?";
mongodb.connect(uri);
const db = mongodb.connection;
db.on('error', err => console.log(err))
db.once('open', msg => console.log("Database Connected!"));