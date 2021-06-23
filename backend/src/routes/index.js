var express = require('express')
var router = express.Router()
var Links = require("../models/links")
/* GET home page. */
router.get('/:shortLink', async function (req, res, next) {
  try {
    const shortLink = await Links.findOne({ shortLink: req.params.shortLink })

    if (shortLink) {
      const expiryDate = new Date(shortLink.expired_at);
      const currentDate = new Date();

      if (currentDate < expiryDate) {
        shortLink.clickCount++;
        shortLink.save();
        res.redirect(shortLink.longLink);
      } else {
        res.redirect("http://localhost:3000/notFound")
      }

    } else {
      res.redirect("http://localhost:3000/notFound")
    }

  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
