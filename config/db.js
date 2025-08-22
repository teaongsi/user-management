import mongoose from 'mongoose';
import "dotenv/config";

const dbURI = process.env.DBURI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
}

export default connectDB;