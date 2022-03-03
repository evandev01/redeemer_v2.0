const Event = require('../models/EventModel')
const asyncHandler = require('express-async-handler')

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({})

  if (events) {
    res.json(events)
  } else {
    res.status(404).json({ message: 'Events not found' })
    throw new Error('Event not found')
  }
})

const getEvent = asyncHandler(async (req, res) => {
  const id = req.params.id

  const event = await Event.findById({ _id: id })

  if (event) {
    res.json(event)
  } else {
    res.status(404).json({ message: 'Event not found' })
    throw new Error('Event not found')
  }
})

const createEvent = asyncHandler(async (req, res) => {
  const { title, line1, line2, desc, desc2, image, tier } = req.body

  const event = new Event({
    title: title,
    line1: line1,
    line2: line2,
    desc: desc,
    desc2: desc2,
    image: image,
    tier: tier ? tier : 0,
  })

  const createdEvent = await event.save()

  res.status(201).json(createdEvent)
})

const updateEvent = asyncHandler(async (req, res) => {
  const { title, line1, line2, desc, desc2, image, tier } = req.body
  const id = req.params.id

  const event = await Event.findById({ _id: id })

  if (event) {
    event.title = title
    event.line1 = line1
    event.line2 = line2
    event.desc = desc
    event.desc2 = desc2
    event.image = image
    event.tier = tier

    const updatedEvent = await event.save()
    res.json(updatedEvent)
  } else {
    res.status(404).json({ message: 'Event not found' })
    throw new Error('Event not found')
  }
})

const deleteEvent = asyncHandler(async (req, res) => {
  const id = req.params.id

  const event = await Event.findById({ _id: id })

  if (event) {
    await event.remove()
    res.json({ message: 'Event removed' })
  } else {
    res.status(404).json({ message: 'Event not found' })
    throw new Error('Event not found')
  }
})

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
}
