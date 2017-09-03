const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninjaModel');

// get the list of ninjas from the database
// actually accessing '/api/ninjas' but no need to write '/api'
// but just '/ninjas' as they will be prefixed with '/api'
// where routes are being called
router.get('/ninjas', (req, res) => {
  res.send({type: 'GET'});
});


// add a new ninja to the database
router.post('/ninjas', (req, res) => {
  // mongo method
  // var ninja = new NinjaModel(req.body);
  // ninja.save(); // saving it in the ninja collection created in model

  // You can do both above with below mongoose method
  NinjaModel.create(req.body)  // returns a promise - creates a new instance of the ninjaModel using the req.body data and save it in DB
  .then((ninja) => {            // attaching async callback function to then - wait till action is complete when res comes back
    console.log(ninja);
    res.send(ninja);           // sending data back to confirm it went okay!
  });
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  });
});


// update a ninja in the database
// when passing the id you need to puts ':' in front of it but your app will show it as '/ninjas/xc7eqwe'
router.put('/ninjas/:id', (req, res) => {
  res.send({type: 'PUT'});
});

// delete a ninjas from the database
// need id of the ninja that need to be deleted from the database
router.delete('/ninjas/:id', (req, res) => {
  res.send({type: 'DELETE'});
});

module.exports = router;
