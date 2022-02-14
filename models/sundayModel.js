const mongoose = require('mongoose')

const sundaySchema = mongoose.Schema(
  {
    embedLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Sunday = mongoose.model('Sunday', sundaySchema)

module.exports = Sunday
