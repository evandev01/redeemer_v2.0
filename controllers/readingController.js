const Reading = require('../models/ReadingModel')
const asyncHandler = require('express-async-handler')

const getReadings = asyncHandler(async (req, res) => {
	const readings = await Reading.find({})

	if (readings) {
		res.json(readings)
	} else {
		res.status(404).json({ message: 'Readings not found' })
		throw new Error('Readings not found')
	}
})

const getReading = asyncHandler(async (req, res) => {
	const id = req.params.id

	const reading = await Reading.findById({ _id: id })

	if (reading) {
		res.json(reading)
	} else {
		res.status(404).json({ message: 'Reading not found' })
		throw new Error('Reading not found')
	}
})

const createReading = asyncHandler(async (req, res) => {
	const { week, date, verses } = req.body

	const reading = new Reading({
		week: week,
		date: date,
		verses: verses,
	})

	const createdReading = await reading.save()

	res.status(201).json(createdReading)
})

const updateReading = asyncHandler(async (req, res) => {
	const { week, date, verses } = req.body
	const id = req.params.id

	const reading = await Reading.findById({ _id: id })

	if (reading) {
		reading.week = week
		reading.date = date
		reading.verses = verses

		const updatedReading = await reading.save()
		res.json(updatedReading)
	} else {
		res.status(404).json({ message: 'Reading not found' })
		throw new Error('Reading not found')
	}
})

const deleteReading = asyncHandler(async (req, res) => {
	const id = req.params.id

	const reading = await Reading.findById({ _id: id })

	if (reading) {
		await reading.remove()
		res.json({ message: 'Reading removed' })
	} else {
		res.status(404).json({ message: 'Reading not found' })
		throw new Error('Reading not found')
	}
})

module.exports = {
	getReadings,
	getReading,
	createReading,
	updateReading,
	deleteReading,
}
