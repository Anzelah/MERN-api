require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/ProductRoutes')
const app = express()


const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000

app.use(express.json())
// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('Hello world!')
})

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB Database...')
    app.listen(PORT, () => {
    console.log(`Node API application listening on port: ${PORT}`)
    })
}).catch((err) => console.log(err))
