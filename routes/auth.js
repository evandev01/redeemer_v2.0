const router = require('express').Router()
const dotenv = require('dotenv').config()
// const { loginAdmin } = require('../controllers/authController')

router.post('/', (req, res) => {
  console.log(req.body.password)
  console.log(process.env.PASSWORD)

  const envPass = process.env.PASSWORD
  const userPass = req.body.password

  if (userPass == envPass) {
    console.log(true)
    res.send(true)
    // res.send(true)
    // return res.status(302).redirect('/watchlive')
  }
})

module.exports = router
