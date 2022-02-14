const Wednesday = require('../models/wednesdayModel')

// @desc    Get all embed links for Wednesday
// @route   GET /api/embed
// @access  Public
const getWednesdayEmbedLinks = async (req, res) => {
  const wednesdayEmbedLinks = await Wednesday.find({}).populate('embedLink')

  if (wednesdayEmbedLinks) {
    res.json(wednesdayEmbedLinks)
  } else {
    res.status(404)
    throw new Error('Wednesday embed links not found')
  }
}

// @desc    Get single embed link by ID for Wednesday
// @route   GET /api/embed/:id
// @access  Public
const getWednesdayEmbedLink = async (req, res) => {
  const wednesdayEmbedLink = await Wednesday.findById({ _id: req.params.id })

  if (wednesdayEmbedLink) {
    res.json(wednesdayEmbedLink)
  } else {
    res.status(404)
    throw new Error('Wednesday embed link not found')
  }
}

// @desc    Create an embed link for Wednesday
// @route   POST /api/embed
// @access  Private/Admin
const createWednesdayEmbedLink = async (req, res) => {
  const { embedLink } = req.body

  const wednesday = new Wednesday({ embedLink: embedLink })

  const createdEmbedLink = await wednesday.save()
  res.status(201).json(createdEmbedLink)
}

// @desc    Update an embed link for Wednesday
// @route   PUT /api/embed/:id
// @access  Private/Admin
const updateWednesdayEmbedLink = async (req, res) => {
  const { embedLink } = req.body

  const wednesday = await Wednesday.findById({ _id: req.params.id })

  if (wednesday) {
    wednesday.embedLink = embedLink
    const updatedEmbedLink = await wednesday.save()
    res.json(updatedEmbedLink)
  } else {
    res.status(404)
    throw new Error('Wednesday embed link not found')
  }
}

// @desc    Delete an embed link by ID for Wednesday
// @route   DELETE /api/embed/:id
// @access  Private/Admin
const deleteWednesdayEmbedLink = async (req, res) => {
  const wednesdayEmbedLink = await Wednesday.findById({ _id: req.params.id })

  if (wednesdayEmbedLink) {
    await wednesdayEmbedLink.remove()
    res.json({ message: 'Wednesday embed link removed.' })
  } else {
    res.status(404)
    throw new Error('Wednesday embed link not found')
  }
}

module.exports = {
  getWednesdayEmbedLinks,
  getWednesdayEmbedLink,
  createWednesdayEmbedLink,
  updateWednesdayEmbedLink,
  deleteWednesdayEmbedLink,
}
