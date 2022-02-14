const router = require('express').Router()
const {
  createSundayEmbedLink,
  getSundayEmbedLinks,
  getSundayEmbedLink,
  updateSundayEmbedLink,
  deleteSundayEmbedLink,
} = require('../../controllers/sundayController')

router.route('/').post(createSundayEmbedLink).get(getSundayEmbedLinks)
router
  .route('/:id')
  .get(getSundayEmbedLink)
  .put(updateSundayEmbedLink)
  .delete(deleteSundayEmbedLink)

module.exports = router
