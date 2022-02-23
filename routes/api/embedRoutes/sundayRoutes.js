const router = require('express').Router()
const {
  createSunday,
  getSundays,
  getSunday,
  updateSunday,
  deleteSunday,
} = require('../../../controllers/sundayController')

router.route('/').post(createSunday).get(getSundays)
router.route('/:id').get(getSunday).put(updateSunday).delete(deleteSunday)

module.exports = router
