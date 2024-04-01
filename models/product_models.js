const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productsSchema = new Schema(
    {
        name: { type: String, required: [true, "Please input a product name"]},
        quantity: { type: Number, required: true, default: 0 },
        size: { type: String, required: [true, "Please input the product size"] },
        brand: { type: String, required: true, default: "null" },
        price: { type: Number, required: [true, "Please input the product price"] },
        image: { type: String, required: false }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;