import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

declare global {
    var _mongoose: typeof mongoose | undefined;
}

export async function connectDB() {
    if (!global._mongoose) {
        const connection = await mongoose.connect(MONGODB_URI);
        global._mongoose = connection;
    }
    return global._mongoose;
}