import 'dotenv/config';
import express from "express";
import { connectToDB } from "./utils/connectToDB.js";

const app = express();


//middleware
app.use(express.json())
connectToDB(process.env.MONGO_URI)

//routes

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is currently running on the PORT: ${PORT}`)
})