import 'dotenv/config';
import express from "express";
import { connectToDB } from "./utils/connectToDB.js";
import urlRoutes from "./routes/url-route.js"

import cors from "cors";
import helmet from "helmet";
const app = express();


//middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL
}));
app.use(express.json())
connectToDB(process.env.MONGO_URI)

//routes
app.use("/", urlRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is currently running on the PORT: ${PORT}`)
})