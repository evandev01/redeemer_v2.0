const User = require('../models/UserModel')
const { generateToken } = require('../utils/generateToken')

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body

  // Find the user // Find one document
  const user = await User.findOne({ email: email, password: password })

  // Checks to see if the user exists
  // Attempts to match the password to the encrypted password using bcrypt inside userModel
  // If the user exists and the email/password match, then return user data with token as payload
  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    // Unauthorized 401 status
    res.status(401)
    throw new Error('Invalid email or password')
  }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  // Find the user // Find one document
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400) // Bad request
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400) // Bad request
    throw new Error('Invalid user data')
  }
}

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}

// @desc    Update user info
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.password = req.body.password

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}

module.exports = {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
}
