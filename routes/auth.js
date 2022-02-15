const router = require('express').Router()
const { loginAdmin } = require('../controllers/authController')

router.post('/', loginAdmin)

module.exports = router
