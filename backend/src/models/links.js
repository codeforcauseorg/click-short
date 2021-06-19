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
    required: true,
    validate(value) {
      if (!validator.isDate(value)) {
        throw new Error("Invalid Date Format")
      }
    }
  },
  clickCount: {
    type: Number,
    default: 0
  },
  owner: {
    type: String,
    trime: true,
    required: true
  }
},
  {
    timestamps: true
  }
)

// linkSchema.statics.isShortLinkAlreadyTaken() = async function (shortLink) {
//   const link = await this.findOne({shortLink}) ; 
//   return !!link;
// }

// linkSchema.statics.isLongLinkAlreadyShortened = async function(longLink, userId) {
//   const link = await this.findOne({longLink, _id: userId})
//   return !!link
// }

const link = mongoose.model('Link', linkSchema)

module.exports = link
