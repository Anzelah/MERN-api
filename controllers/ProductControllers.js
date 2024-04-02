const Product = require('../models/product_models')
const asyncHandler = require('express-async-handler')
const { Types } = require('mongoose')


const isValidObjectId = Types.ObjectId.isValid


// get all products
const getProducts = asyncHandler(async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        throw new Error(error.message)
    }
})

// get specific product by id
const getSpecificProduct = asyncHandler(async (req, res) => {
    try {
        const id  = req.params.id
        if (!isValidObjectId(id) ) {
            res.status(400)
            throw new Error(`Invalid product ID: <${id}> must be 24 characters`)
        }

        const product = await Product.findById(id)
        if (!product)  {
            res.status(404)
            throw new Error(`Cannot find product with ID <${id}> in database`)
        }
        res.status(200).json(product)

    } catch (error) {
        throw new Error(error.message)
    }
})

// create a product into the database
const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch(error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// update a product by id
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        if (!isValidObjectId(id) ) {
            res.status(400)
            throw new Error(`Invalid product ID: <${id}> must be 24 characters`)
        }

        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            res.status(404)
            throw new Error(`Cannot find product with ID <${id}> in database`)
        }
        
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch(error) {
        throw new Error(error.message)
    }
})

// delete one single product from database
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id) ) {
            res.status(400)
            throw new Error(`Invalid product ID: <${id}> must be 24 characters`)
        }

        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            res.status(404)
            throw new Error(`Cannot find product with ID <${id}> in database`)
        }
        res.status(200).json(product);

    } catch(error) {
        throw new Error(error.message)
    }
})

module.exports = {
    getProducts,
    getSpecificProduct,
    createProduct,
    updateProduct, 
    deleteProduct
}