import mongoose from "mongoose";

//connect to the mongodb database

const connectDb = async () => {
    mongoose.connection.on('connected',())
}