const mongoose = require('mongoose')
const validator = require('validator')

const linkSchema = new mongoose.Schema({
  longLink: {
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error('Invalid Url')
      }
    }
  },
  shortLink: {
    type: String,
    trim: true
  },
  expired_at: {
    type: Date,
    required: true
  },
  clickCount: {
    type: Number,
    default: 0
  }
},
{
  timestamps: true
}
)

const link = mongoose.model('Link', linkSchema)

module.exports = link
