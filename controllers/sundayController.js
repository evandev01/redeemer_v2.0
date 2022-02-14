const Sunday = require('../models/sundayModel')

// @desc    Get all embed links for Sundays
// @route   GET /embed
// @access  Public
const getSundayEmbedLinks = async (req, res) => {
  const sundayEmbedLinks = await Sunday.find({})

  if (sundayEmbedLinks) {
    res.json(sundayEmbedLinks)
  } else {
    res.status(404)
    throw new Error('Sunday embed links not found.')
  }
}

// @desc    Get single embed link by ID for Sunday
// @route   GET /embed/:id
// @access  Public
const getSundayEmbedLink = async (req, res) => {
  const sundayEmbedLink = await Sunday.findById({ _id: req.params.id })

  if (sundayEmbedLink) {
    res.json(sundayEmbedLink)
  } else {
    res.status(404)
    // .json({ message: 'Sunday embed link not found.' })
    throw new Error('Sunday embed link not found.')
  }
}

// @desc    Create an embed link for Sunday
// @route   POST /embed
// @access  Private/Admin
const createSundayEmbedLink = async (req, res) => {
  const { embedLink } = req.body

  const sunday = new Sunday({ embedLink: embedLink })

  const createdEmbedLink = await sunday.save()
  res.status(201).json(createdEmbedLink)
}

// @desc    Update an embed link for Sunday
// @route   PUT /embed/:id
// @access  Private/Admin
const updateSundayEmbedLink = async (req, res) => {
  const { embedLink } = req.body

  const sunday = await Sunday.findById(req.params.id)

  if (sunday) {
    sunday.embedLink = embedLink

    const updatedEmbedLink = await sunday.save()
    res.json(updatedEmbedLink)
  } else {
    res.status(404)
    throw new Error('Sunday embed link not found.')
  }
}

// @desc    Delete an embed link for Sunday
// @route   DELETE /embed/:id
// @access  Private/Admin
const deleteSundayEmbedLink = async (req, res) => {
  const { embedLink } = req.body

  const sunday = await Sunday.findById(req.params.id)

  if (sunday) {
    sunday.embedLink = embedLink
    await sunday.remove()
    res.json({ message: 'Sunday embed link removed.' })
  } else {
    res.status(404)
    throw new Error('Sunday embed link not found.')
  }
}

module.exports = {
  getSundayEmbedLinks,
  getSundayEmbedLink,
  createSundayEmbedLink,
  updateSundayEmbedLink,
  deleteSundayEmbedLink,
}
