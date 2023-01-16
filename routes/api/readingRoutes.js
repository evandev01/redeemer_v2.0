const router = require('express').Router()
const {
	getReadings,
	getReading,
	createReading,
	updateReading,
	deleteReading,
} = require('../../controllers/readingController')

router.route('/').get(getReadings).post(createReading)
router.route('/:id').get(getReading).put(updateReading).delete(deleteReading)

module.exports = router
