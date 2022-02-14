const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })
const router = require('express').Router()

router.post('/login', async (req, res) => {
  const { password } = req.body

  if (password === process.env.PASSWORD) {
    return
  } else {
    return
  }
})

module.exports = router
