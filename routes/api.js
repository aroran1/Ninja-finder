const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninjaModel');

// get the list of ninjas from the database
// actually accessing '/api/ninjas' but no need to write '/api'
// but just '/ninjas' as they will be prefixed with '/api'
// where routes are being called
router.get('/ninjas', (req, res, next) => {
  res.send({type: 'GET'});
});


// add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
  // MONGO METHOD TO CREATE AND SAVE
  // var ninja = new NinjaModel(req.body);
  // ninja.save(); // saving it in the ninja collection created in model

  // MONGOOSE METHOD TO CREATE AND SAVE IS JUST 'create'
  NinjaModel.create(req.body)  // creates a new instance of the ninjaModel using the req.body data and save it in DB and returns a promise
  .then((ninja) => {           // attaching async callback function to then - wait till action is complete when res comes back
    res.send(ninja);           // sending data back as response to confirm it went okay!
  }).
  catch(next);                 // pass it to the next piece of the Middleware, i.e, error
});


// update a ninja in the database
// when passing the id you need to puts ':' in front of it but your app will show it as '/ninjas/xc7eqwe'
router.put('/ninjas/:id', (req, res, next) => {
  NinjaModel.findByIdAndUpdate({_id: req.params.id}, req.body) // MONGOOSE METHOD: findByIdAndUpdate
  .then(() => {
    NinjaModel.findOne({_id: req.params.id}) // MONGOOSE METHOD: findOne, to find the updated value of the matched id
    .then((ninja) => {
      res.send(ninja);  // returns updated value of the id as response
    });
  });
});


// delete a ninjas from the database
// need id of the ninja that need to be deleted from the database
router.delete('/ninjas/:id', (req, res, next) => {
  NinjaModel.findByIdAndRemove({_id: req.params.id}) //  MONGOOSE METHOD: findByIdAndRemove
  .then((ninja) => {
    res.send(ninja);
  });
});

module.exports = router;
