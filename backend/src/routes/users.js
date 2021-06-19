var express = require('express')
var router = express.Router()
const User = require('../models/User')
const { auth } = require('../middleware/auth')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/add', function (req, res) {
  const user = new User(req.body)

  user
    .save()
    .then(() => {
      console.log('user saved!')
      res.send(user)
    })
    .catch((e) => {
      res.status(400).send(e.message)
    })
})

router.get('/auth', function (req, res, next) {
  res.render('login')
})

router.post('/auth', auth, (req, res, next) => {
  console.log('Authentication is successful')
})

router.get('/checkAuth', auth, function (req, res) {
  res.send('User is authenticated!')
})

module.exports = router
