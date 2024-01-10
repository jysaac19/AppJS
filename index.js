const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});