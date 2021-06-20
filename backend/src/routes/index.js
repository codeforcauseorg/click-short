var express = require('express')
var router = express.Router()
var Links = require("../models/links")
/* GET home page. */
router.get('/:shortLink', async function (req, res, next) {
  try {
    console.log(req.params.shortLink)
    const shortLink = await Links.findOne({ shortLink: req.params.shortLink })

    if (shortLink) {
      res.redirect(shortLink.longLink)
    } else {
      res.send("short link doesn't exist")
    }
  } catch (e) {
    res.send(e)
  }
  // res.send(shortLink)
  // shortLink.clickCount++;
  // shortLink.save();


})

module.exports = router
