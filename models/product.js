import mongoose from 'mongoose';

const { Schema } = mongoose;

// Check if the model is already defined
const Product = mongoose.models.Product 
    ? mongoose.model('Product') 
    : mongoose.model('Product', new Schema({
        title: { type: String, required: true },
        description: String,
        price: { type: Number, required: true }
    }));

export default Product;
