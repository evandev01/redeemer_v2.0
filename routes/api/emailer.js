const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })
const router = require('express').Router()
const sgMail = require('@sendgrid/mail')

router.post('/', async (req, res) => {
	const { name, email, subject, text } = req.body

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: `<${process.env.EMAIL}>`,
		from: `${name}(redeemerchurch.life)<${process.env.EMAIL}>`,
		subject: subject,
		text: text,
		html: `
		<div style="display: block;>
    <div style="width: 100%; margin: auto;">
      <img src="https://www.redeemerchurch.life/images/red_logo01.png" />
    </div>
    <div style="border-bottom: 1px solid rgba(0,0,0,0.5)"></div>
    <div style="text-align: flex-start;">
      <h4>Sender: ${name}</h4>
      <h4>Email: ${email}</h4>
      <h4>Subject: ${subject}</h4>
      <h4>Message:</h4>
      <p style="line-height: 2em;">${text}</p>
    </div>
  </div>`,
	}
	await sgMail.send(msg).then(
		() => {
			res
				.status(200)
				.send(
					'Message sent! Please allow 24 hours for a response. We look forward to connecting with you!'
				)
		},
		error => {
			console.error(error)

			if (error.response) {
				console.error(error.response.body)
			}
			res
				.status(500)
				.send(
					'Message failed. Please check to make sure that email address is valid.'
				)
		}
	)
})

module.exports = router
