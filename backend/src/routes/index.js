var express = require('express')
var router = express.Router()
var Links = require("../models/links")
/* GET home page. */
router.get('/:shortLink', async function (req, res, next) {
  try {
    const shortLink = await Links.findOne({ shortLink: req.params.shortLink })

    if (shortLink) {
      shortLink.clickCount++;
      shortLink.save();
      res.redirect(shortLink.longLink)
    } else {
      res.send("short link doesn't exist")
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
