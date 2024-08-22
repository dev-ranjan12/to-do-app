import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected: ${conn.connection.host}');        
    }catch(error){
        console.log('Error: ${error.message}');
        process.exit(1);
    }
};

module.exports = connectDB;