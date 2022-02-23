const router = require('express').Router()
const sunday = require('./sundayRoutes')
const wednesday = require('./wednesdayRoutes')

router.use('/sunday', sunday)
router.use('/wednesday', wednesday)

module.exports = router
