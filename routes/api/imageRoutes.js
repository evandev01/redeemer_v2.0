const router = require('express').Router()
const {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
} = require('../../controllers/imageController')
const { protect } = require('../../middleware/auth')

router.route('/').get(getImages).post(createImage)
router
  .route('/:id')
  .get(protect, getImage)
  .put(protect, updateImage)
  .delete(protect, deleteImage)

module.exports = router
