const mongoose = require('mongoose')

const readingSchema = mongoose.Schema(
	{
		week: { type: String, required: true },
		date: { type: String, required: true },
		verses: [
			{
				type: String,
				required: true,
			},
		],
	},
	{
		timestamps: true,
	}
)

const Reading = mongoose.model('Reading', readingSchema)

module.exports = Reading
