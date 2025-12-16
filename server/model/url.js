import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    shortUrl: {
        type: String,
        unique: true,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    visitHistory: [{
        time: {
            type: Date
        }
    }]
}, { timestamps: true })

const URL = mongoose.model("url", urlSchema)
export default URL;