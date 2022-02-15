const router = require('express').Router()
const {
  createWednesday,
  getWednesdays,
  getWednesday,
  updateWednesday,
  deleteWednesday,
} = require('../../controllers/wednesdayController')

router.route('/').post(createWednesday).get(getWednesdays)
router
  .route('/:id')
  .get(getWednesday)
  .put(updateWednesday)
  .delete(deleteWednesday)

module.exports = router
