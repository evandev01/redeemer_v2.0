const Auth = require('../models/authModel')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')

const loginAdmin = async (req, res) => {
  const { password } = req.body
  console.log(password)

  const auth = await Auth.findOne({ password: password })

  if (auth) {
    // console.log('true')
    // console.log(auth)
    console.log(process.env.PASSWORD)
  }

  if (auth.password == process.env.PASSWORD) {
    console.log('true')
    res.redirect(302, '/watchlive')
  } else {
    console.log('false')
  }
}

module.exports = { loginAdmin }

// const auth = new Auth({
//   password: password,
// })
// const createdPassword = await auth.save()
// res.status(201).json(createdPassword)
