var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res) {
  const user = new User(req.body)
  
  user.save().then(()=> {
    console.log("user saved!")
    res.send(user)
  }).catch(e => {
    res.status(400).send(e.message)
  })
})

module.exports = router;
