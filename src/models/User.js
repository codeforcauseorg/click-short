const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email Address')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, 'Password too short']
  },
  token: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
