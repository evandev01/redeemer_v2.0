const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
dotenv.config()

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
//
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
})
