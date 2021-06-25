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

    if (await Links.isShortLinkAlreadyTaken(shortLink)) {
      res.status(400).send({ message: `The shortened link named: ${shortLink} is already taken` })
    }
    else if (await Links.isLongLinkAlreadyShortened(longLink, owner)) {
      res.status(400).send({ message: "This link is already Shortened" })
    }
    else {
      const savedLink = await link.save()
      res.send(savedLink)
    }
  } catch (e) {
    res.status(400).send(e);
  }
})

router.put('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id

    if (req.body.shortLink && await Links.isShortLinkAlreadyTaken(req.body.shortLink)) {
      res.status(400).send({ message: `Unable to update!! The short link named: ${req.body.shortLink} is already taken` })
    }

    if (req.body.longLink && await Links.isLongLinkAlreadyShortened(req.body.longLink, req.body.owner)) {
      res.status(400).send({ message: "Unable to update!! The Long link is already shortened!" })
    }

    const updatedValue = await Links.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false });
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
