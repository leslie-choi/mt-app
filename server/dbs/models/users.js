import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  birthday: {
    type: String,
    require: false
  },
  telephone: {
    type: Number,
    require: false
  }
})

module.exports = mongoose.model('User', UserSchema)
