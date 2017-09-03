const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

// set up express app
const app = express();

// BASIC WAY TO SET APP
// app.get('/api', (req, res) => {
//   console.log('GET request');
//   res.send({name:'Josh'});
// });


// App body parser
// Body parser need to go before router
app.use(bodyParser.json());

// App Routing
// first parameter to prefix all the routes with  '/api'
app.use('/api', routes);

// App listening to port
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log('Now listening for requests:');
});
