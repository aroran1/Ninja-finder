const express = require('express');
const router = express.Router();

// get the list of ninjas from the database
// actually accessing '/api/ninjas' but no need to write '/api'
// but just '/ninjas' as they will be prefixed with '/api'
// where routes are being called
router.get('/ninjas', (req, res) => {
  res.send({type: 'GET'});
});


// add a new ninja to the database
router.post('/ninjas', (req, res) => {
  console.log(req.body);
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
