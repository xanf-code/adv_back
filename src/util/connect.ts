import mongoose from 'mongoose';

require('dotenv').config();

const mongoURL: any = process.env.MONGODB_URI;

export const connect = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('🌱 MongoDB connected');
    }
    catch (err) {
        console.log('Error connecting to MongoDB: ', err);
        process.exit(1);
    }

}