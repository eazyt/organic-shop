
const path = require('path')
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const config = require('./config/secret')
const engine = require('ejs-mate');

const orderControllers = require('./controllers/orderController');

const app = express();

const PORT = config.port || 4001

const URL = config.database

mongoose.connect(URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((err) => {
    console.log('Could not connect to Mongodb:', err)
  })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));
app.set('views', `${__dirname}/views`);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//   res.send('Hello App 4000')
// });
app.use('/', orderControllers);

app.listen(PORT, () => {
  console.log(`App running on localhost port ${PORT}`)
});
