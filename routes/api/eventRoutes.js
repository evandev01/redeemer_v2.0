const router = require('express').Router()
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../../controllers/eventController')

router.route('/').get(getEvents).post(createEvent)
router.route('/:id').get(getEvent).put(updateEvent).delete(deleteEvent)

module.exports = router
