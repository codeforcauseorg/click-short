var express = require('express')
const { auth, adminAuth } = require('../middleware/auth')
var router = express.Router()
const Links = require('../models/links')

router.get('/', auth, async function (req, res, next) {
  res.send(await Links.find({ owner: req.body.owner }).sort({ 'updatedAt': -1 }))
})

router.post('/', auth, async (req, res) => {
  try {
    const link = new Links(req.body);
    const { shortLink, longLink, owner } = req.body;

    if (await Links.isShortLinkAlreadyTaken(shortLink) || await Links.isLongLinkAlreadyShortened(longLink, owner)) {
      console.log("kya hua");
      res.status(400).send({ message: "The shortened link is already taken OR The link is already Shortened" })
    } else {
      link
        .save()
        .then(() => {
          res.send(link)
        })
        .catch((e) => {
          res.status(400).send(e.message)
        })
    }

  } catch (e) {
    res.status(400).send(e);
  }
})

router.put('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id
    const updatedValue = await Links.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedValue)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get("/all-links", adminAuth, async (req, res) => {
  if (req.email === "abhimait1909@gmail.com") {
    res.send(await Links.find().lean())
  } else {
    res.status(401).send("You are Not Authorised to make this request");
  }
})

module.exports = router
