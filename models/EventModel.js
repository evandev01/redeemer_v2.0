const mongoose = require('mongoose')

const eventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    line1: { type: String, required: false },
    line2: { type: String, required: false },
    desc: { type: String, required: false },
    image: { type: String, required: false },
    tier: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: true,
  }
)

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
