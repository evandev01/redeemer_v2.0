const router = require('express').Router()
const {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../../controllers/userController')

// Calls functions in controller

router.route('/').post(registerUser).get(getUsers)
router.post('/login', authUser)
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)

module.exports = router
