const Image = require('../models/ImageModel')
const asyncHandler = require('express-async-handler')

// @desc    Get all Images
// @route   GET /api/image
// @access  Public
const getImages = asyncHandler(async (req, res) => {
  const images = await Image.find({}).populate('image')

  if (images) {
    res.json(images)
  } else {
    res.status(404).json({ message: 'Image URL not found' })
    throw new Error('Image embed URLs not found')
  }
})

// @desc    Get Image by ID
// @route   GET /api/image/:id
// @access  Public
const getImage = asyncHandler(async (req, res) => {
  const _id = req.params.id

  const image = await Image.findById({ _id })

  if (image) {
    res.json(image)
  } else {
    res.status(404).json({ message: 'Image URL not found' })
    throw new Error('Image embed URL not found')
  }
})

// @desc    Create Image
// @route   POST /api/image
// @access  Private/Admin
const createImage = asyncHandler(async (req, res) => {
  const { image } = req.body

  const newImage = new Image({ image: image })

  const createdImage = await newImage.save()
  res.status(201).json(createdImage)
})

// @desc    Update Image
// @route   PUT /api/image/:id
// @access  Private/Admin
const updateImage = asyncHandler(async (req, res) => {
  const { image } = req.body
  const _id = req.params.id

  const existingImage = await Image.findById({ _id })

  if (existingImage) {
    image.image = image

    const updatedImage = await existingImage.save()
    res.json(updatedImage)
  } else {
    res.status(404).json({ message: 'Image URL not found' })
    throw new Error('Image embed URL not found')
  }
})

// @desc    Delete Image by ID
// @route   DELETE /api/image/:id
// @access  Private/Admin
const deleteImage = asyncHandler(async (req, res) => {
  const _id = req.params.id

  const image = await Image.findById({ _id })

  if (image) {
    await image.remove()
    res.json({ message: 'Image URL removed' })
  } else {
    res.status(404).json({ message: 'Image URL not found' })
    throw new Error('Image embed URL not found')
  }
})

module.exports = {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
}
