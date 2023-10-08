require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dbConnect = require('./config/connectDB')
const corsOption = require('./config/corsOption')

const PORT = process.env.PORT || 3500
const app = express()
dbConnect()

app.use(cors(corsOption))
app.use(express.json())
app.use('/feature', require('./routes/feature.js'))

mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB Driver')
	app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
})

process.on('uncaughtException', e => console.error(e))
