const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

// set up express app
const app = express();


// BASIC WAY TO SET APP
// app.get('/api', (req, res) => {
//   console.log('GET request');
//   res.send({name:'Josh'});
// });

// Connect to mongoDB
// if 'ninjago' doesnt exist in the databse it will be automatically created in the database
mongoose.connect('mongodb://localhost/ninjago', {useMongoClient: true});
mongoose.Promise = global.Promise // re-assigned mongoose Promise to node global promise as mongoose promise has been deprecated


// attach static files
app.use(express.static('public'));


// App Middleware -  body parser
// Body parser need to go before router
app.use(bodyParser.json());


// App Routing - initialise routes
// first parameter to prefix all the routes with  '/api'
app.use('/api', routes);


// App Middleware -  error handling
// this need to be attcahed before response
app.use(function(err, req, res, next){
  if(err){
    res.status(422).send({error: err.message});
  }
});

// App listening to port
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log('Now listening for requests:');
});
