import Product from '../../../models/product';
import { mongooseConnect } from '../../../lib/mongoose';

export default async function handle(req, res) {
    const { method } = req;

    try {
        // Ensure MongoDB connection is established
        await mongooseConnect();

        if (method === 'GET') {
            // Retrieve and send all products
            const products = await Product.find();
            res.json(products);
        } else if (method === 'POST') {
            // Extract data from the request body
            const { title, description, price } = req.body;

            // Create a new product document using the Mongoose model
            const productDoc = await Product.create({
                title,
                description,
                price
            });

            // Respond with a success message
            res.status(201).json({ message: 'Product created successfully', product: productDoc });
        } else {
            // Handle unsupported methods
            res.status(405).send('Method Not Allowed');
        }
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
