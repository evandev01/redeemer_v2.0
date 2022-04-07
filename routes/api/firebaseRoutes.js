const router = require('express').Router()
const { getKeys } = require('../../controllers/firebaseController')

router.route('/').get(getKeys)

module.exports = router
