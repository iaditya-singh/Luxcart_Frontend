const { Schema, model, models } = require('mongoose');

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    images: [{ type: String}], // Use [String] to represent an array of strings
});

export const Product = models.Product || model('Product', ProductSchema);
