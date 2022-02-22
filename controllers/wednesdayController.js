const Wednesday = require('../models/WednesdayModel')

// @desc    Get all Wednesdays
// @route   GET /api/wednesday
// @access  Public
const getWednesdays = async (req, res) => {
  const wednesdays = await Wednesday.find({}).populate('embedURL')

  if (wednesdays) {
    res.json(wednesdays)
  } else {
    res.status(404)
    throw new Error('Wednesday embed URLs not found')
  }
}

// @desc    Get Wednesday by ID
// @route   GET /api/wednesday/:id
// @access  Public
const getWednesday = async (req, res) => {
  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    res.json(wednesday)
  } else {
    res.status(404)
    throw new Error('Wednesday embed URL not found')
  }
}

// @desc    Create Wednesday
// @route   POST /api/wednesday
// @access  Private/Admin
const createWednesday = async (req, res) => {
  const { embedURL } = req.body

  const wednesday = new Wednesday({ embedURL: embedURL })

  const createdWednesday = await wednesday.save()
  res.status(201).json(createdWednesday)
}

// @desc    Update Wednesday
// @route   PUT /api/wednesday/:id
// @access  Private/Admin
const updateWednesday = async (req, res) => {
  const { embedURL } = req.body

  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    wednesday.embedURL = embedURL

    const updatedWednesday = await wednesday.save()
    res.json(updatedWednesday)
  } else {
    res.status(404)
    throw new Error('Wednesday embed URL not found')
  }
}

// @desc    Delete Wednesday by ID for Wednesday
// @route   DELETE /api/wednesday/:id
// @access  Private/Admin
const deleteWednesday = async (req, res) => {
  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    await wednesday.remove()
    res.json({ message: 'Wednesday embed URL removed' })
  } else {
    res.status(404)
    throw new Error('Wednesday embed URL not found')
  }
}

module.exports = {
  getWednesdays,
  getWednesday,
  createWednesday,
  updateWednesday,
  deleteWednesday,
}
