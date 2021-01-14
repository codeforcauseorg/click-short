const mongoose = require('mongoose')
const validator = require('validator')

const Link = mongoose.model('Links', {
  longLink: {
    type: String,
    trim: true,
    validate(value) {
      if(!validator.isURL(value)) {
        throw new Error('Invalid Url')
      }
    }
  },
  shortLink: {
    type: String,
    trim: true
  }
})

module.exports = Link