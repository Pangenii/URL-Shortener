import 'dotenv/config';
import mongoose from "mongoose"
export const connectToDB = (url) => {
    mongoose.connect(url).then(() => console.log("MONGODB connected successfully..."))
}