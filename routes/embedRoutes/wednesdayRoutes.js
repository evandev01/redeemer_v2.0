const router = require('express').Router()
const {
  createWednesdayEmbedLink,
  getWednesdayEmbedLinks,
  getWednesdayEmbedLink,
  updateWednesdayEmbedLink,
  deleteWednesdayEmbedLink,
} = require('../../controllers/wednesdayController')

router.route('/').post(createWednesdayEmbedLink).get(getWednesdayEmbedLinks)
router
  .route('/:id')
  .get(getWednesdayEmbedLink)
  .put(updateWednesdayEmbedLink)
  .delete(deleteWednesdayEmbedLink)

module.exports = router
