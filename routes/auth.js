const router = require('express').Router()
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/UserModel')

// @route   GET /auth
// @desc
// @access  Private/Admin
router.get('/', auth, async (req, res) => {
  try {
    // Returns the decoded user object (decoded token) from auth.js minus the password
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route   POST /auth
// @desc    Authenticate user & get token
// @access  Private
router.post(
  '/',
  [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      // See if the user does not exist
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

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

    res.send(`In the auth route...\nToken: ${token}`)
  }
)

module.exports = router
