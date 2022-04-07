const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const colors = require('colors')
const emailRoute = require('./routes/api/emailer')
const embedRoutes = require('./routes/api/embedRoutes')
const userRoutes = require('./routes/api/userRoutes')
const eventRoutes = require('./routes/api/eventRoutes')
const imageRoutes = require('./routes/api/imageRoutes')

dotenv.config()

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json())

app.use(cors())

// Define Routes
app.use('/api/send', emailRoute)
app.use('/api/embed', embedRoutes)
app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/images', imageRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

const PORT = process.env.PORT || 5000
//
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
})
