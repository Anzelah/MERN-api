const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productsSchema = new Schema(
    {
        name: { type: String, required: [true, "Please input a product name"]},
        quantity: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true },
        image: { type: String, required: false }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.models('Product', productsSchema);

module.exports = Product;