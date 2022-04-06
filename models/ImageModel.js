const mongoose = require('mongoose')

const imageSchema = mongoose.Schema(
  {
    image: { type: String },
  },
  {
    timestamps: true,
  }
)

const Image = mongoose.model('Image', imageSchema)

module.exports = Image
