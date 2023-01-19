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
		from: `${name}(redeemerchurch.life)<${email}>`,
		subject: subject,
		text: text,
		html: `
		<img style="margin: 0;" src="https://www.redeemerchurch.life/images/red_logo01.png" />
    <h3>Name: <strong>${name}</strong></h3>
    <h3>Email: <strong>${email}</strong></h3>
    <h3>Subject: <strong>${subject}</strong></h3>
    <h3>Message:</h3>
    <h4><strong>${text}</strong></h4>`,
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
