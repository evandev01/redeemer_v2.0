const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })
const router = require('express').Router()
const sgMail = require('@sendgrid/mail')

router.post('/', async (req, res) => {
  const subject = req.body.subject
  const email = req.body.email
  const text = req.body.text

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: `<${process.env.EMAIL}>`,
    from: `<${process.env.EMAIL}>`,
    subject: subject,
    text: text,
    html: `
    <h3>Email: <strong>${email}</strong></h3>
    <h3>Subject: <strong>${subject}</strong></h3>
    <h3>Message:</h3>
    <h4><strong>${text}</strong></h4>`,
  }
  await sgMail.send(msg).then(
    () => {},
    error => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  )
})

module.exports = router
