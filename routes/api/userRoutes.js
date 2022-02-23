const router = require('express').Router()
const {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../../controllers/userController')
const { protect } = require('../../middleware/auth')

// Calls functions in controller

router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login', authUser)
router
  .route('/:id')
  .delete(protect, deleteUser)
  .get(protect, getUserById)
  .put(protect, updateUser)

module.exports = router
