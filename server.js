require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/ProductRoutes')
const userRoute = require('./routes/UserRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')
const app = express()


const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// routes
app.use('/api/products', productRoute)
app.use('/api/login', userRoute)
// error middleware
app.use(errorMiddleware)

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
