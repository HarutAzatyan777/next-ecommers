import mongoose from "mongoose";

export async function mongooseConnect() {
    try {
        if (mongoose.connection.readyState === 1) {
            return mongoose.connection;
        } else {
            const uri = process.env.MONGODB_URI;
            return await mongoose.connect(uri);
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
