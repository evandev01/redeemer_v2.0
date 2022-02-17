const router = require('express').Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/UserModel')

// @route   POST /users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      // See if the user exists
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }

      user = new User({ name, email, password })

      // Encrypt password
      // Hash password (10 rounds - the more rounds, the more secure)
      const salt = await bcrypt.genSalt(10)

      // Takes the user password and hashes it
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      }

      const secret = process.env.JWT_SECRET

      jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err
        res.json({ token })
      })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }

    res.send('In the user route')
  }
)

module.exports = router
