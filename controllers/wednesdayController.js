const Wednesday = require('../models/WednesdayModel')
const asyncHandler = require('express-async-handler')

// @desc    Get all Wednesdays
// @route   GET /api/wednesday
// @access  Public
const getWednesdays = asyncHandler(async (req, res) => {
  const wednesdays = await Wednesday.find({}).populate('embedURL')

  if (wednesdays) {
    res.json(wednesdays)
  } else {
    res.status(404).json({ message: 'Wednesday embed URL not found' })
    throw new Error('Wednesday embed URLs not found')
  }
})

// @desc    Get Wednesday by ID
// @route   GET /api/wednesday/:id
// @access  Public
const getWednesday = asyncHandler(async (req, res) => {
  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    res.json(wednesday)
  } else {
    res.status(404).json({ message: 'Wednesday embed URL not found' })
    throw new Error('Wednesday embed URL not found')
  }
})

// @desc    Create Wednesday
// @route   POST /api/wednesday
// @access  Private/Admin
const createWednesday = asyncHandler(async (req, res) => {
  const { embedURL } = req.body

  const wednesday = new Wednesday({ embedURL: embedURL })

  const createdWednesday = await wednesday.save()
  res.status(201).json(createdWednesday)
})

// @desc    Update Wednesday
// @route   PUT /api/wednesday/:id
// @access  Private/Admin
const updateWednesday = asyncHandler(async (req, res) => {
  const { embedURL } = req.body

  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    wednesday.embedURL = embedURL

    const updatedWednesday = await wednesday.save()
    res.json(updatedWednesday)
  } else {
    res.status(404).json({ message: 'Wednesday embed URL not found' })
    throw new Error('Wednesday embed URL not found')
  }
})

// @desc    Delete Wednesday by ID for Wednesday
// @route   DELETE /api/wednesday/:id
// @access  Private/Admin
const deleteWednesday = asyncHandler(async (req, res) => {
  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    await wednesday.remove()
    res.json({ message: 'Wednesday embed URL removed' })
  } else {
    res.status(404).json({ message: 'Wednesday embed URL not found' })
    throw new Error('Wednesday embed URL not found')
  }
})

module.exports = {
  getWednesdays,
  getWednesday,
  createWednesday,
  updateWednesday,
  deleteWednesday,
}
