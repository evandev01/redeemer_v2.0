const Sunday = require('../models/sundayModel')

// @desc    Get all Sundays
// @route   GET /api/sunday
// @access  Public
const getSundays = async (req, res) => {
  const sundays = await Sunday.find({})

  if (sundays) {
    res.json(sundays)
  } else {
    res.status(404)
    throw new Error('Sunday embed URLs not found.')
  }
}

// @desc    Get Sunday by ID
// @route   GET /api/sunday/:id
// @access  Public
const getSunday = async (req, res) => {
  const sunday = await Sunday.findById(req.params.id)

  if (sunday) {
    res.json(sunday)
  } else {
    res.status(404)
    throw new Error('Sunday embed URL not found.')
  }
}

// @desc    Create Sunday
// @route   POST /api/sunday
// @access  Private/Admin
const createSunday = async (req, res) => {
  const { embedURL } = req.body

  const sunday = new Sunday({
    embedURL: embedURL,
  })

  const createdSunday = await sunday.save()
  res.status(201).json(createdSunday)
}

// @desc    Update Sunday
// @route   PUT /api/sunday/:id
// @access  Private/Admin
const updateSunday = async (req, res) => {
  const { embedURL } = req.body

  const sunday = await Sunday.findById({ _id: req.params.id })

  if (sunday) {
    sunday.embedURL = embedURL

    const updatedSunday = await sunday.save()
    res.json(updatedSunday)
  } else {
    res.status(404)
    throw new Error('Sunday embed URL not found')
  }
}

// @desc    Delete Sunday
// @route   DELETE /api/sunday/:id
// @access  Private/Admin
const deleteSunday = async (req, res) => {
  const sunday = await Sunday.findById(req.params.id)

  if (sunday) {
    await sunday.remove()
    res.json({ message: 'Sunday embed URL removed' })
  } else {
    res.status(404)
    throw new Error('Sunday embed URL not found')
  }
}

module.exports = {
  getSundays,
  getSunday,
  createSunday,
  updateSunday,
  deleteSunday,
}
