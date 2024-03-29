const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product_models')
const app = express()

const port = 3000
app.use(express.json())


// GET method
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/products', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

app.get('/products/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

// POST method
app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(req.body)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

// PUT method
app.put('/products/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        
        if (!product) return res.status(404).json({ message: `Cannot find product with ID in database ${id}`})
        
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

// DELETE method
app.delete('/products/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        
        if (!product) return res.status(404).json({ message: `Cannot find product with ID ${id}`})
        
        res.status(200).json(product)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect('mongodb+srv://admin:Angelica87@subscriberapi.rlg8ubn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=SubscriberAPI')
.then(() => {
    console.log('Connected to MongoDB Database...')
    app.listen(port, () => {
    console.log(`Node API application listening on port: ${port}`)
    })
}).catch((err) => console.log(err))
