import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const connectDB = async() => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.URL)
        console.log(`database connect successfully: ${conn.connection.host}`)
    } catch (error) {
        console.log("error")
    }
    
}
export default connectDB;