const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
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
        throw new Error('Invalid Email Adress')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, 'Password too short']
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
