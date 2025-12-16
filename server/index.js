import 'dotenv/config';
import express from "express";
import { connectToDB } from "./utils/connectToDB.js";
import urlRoutes from "./routes/url-route.js"
const app = express();


//middleware
app.use(express.json())
connectToDB(process.env.MONGO_URI)

//routes
app.use("/api/url", urlRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is currently running on the PORT: ${PORT}`)
})