const mongoose = require('mongoose')

const authSchema = mongoose.Schema(
  {
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Auth = mongoose.model('Auth', authSchema)

module.exports = Auth
