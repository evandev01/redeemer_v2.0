const mongoose = require('mongoose')

const wednesdaySchema = mongoose.Schema(
  {
    embedURL: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Wednesday = mongoose.model('Wednesday', wednesdaySchema)

module.exports = Wednesday
