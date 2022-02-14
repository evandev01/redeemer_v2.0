const mongoose = require('mongoose')

const wednesdaySchema = mongoose.Schema(
  {
    embedLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Wednesday = mongoose.model('Wednesday', wednesdaySchema)

module.exports = Wednesday
