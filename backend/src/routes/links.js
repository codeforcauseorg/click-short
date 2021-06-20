var express = require('express')
const { auth, adminAuth } = require('../middleware/auth')
var router = express.Router()
const Links = require('../models/links')

router.get('/', auth, async function (req, res, next) {
  res.send(await Links.find({ owner: req.body.owner }))
})

router.post('/', auth, (req, res) => {
  const link = new Links(req.body)

  link
    .save()
    .then(() => {
      res.send(link)
    })
    .catch((e) => {
      res.status(400).send(e.message)
    })
})

router.get("/all-links", adminAuth, async (req, res) => {
  if (req.email === "abhimait1909@gmail.com") {
    res.send(await Links.find())
  } else {
    res.status(401).send("You are Not Authorised to make this request");
  }
})

module.exports = router
