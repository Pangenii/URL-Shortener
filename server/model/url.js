import mongoose from "mongoose";

const urlSchema = new mongoose({
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

modules.exports = mongoose.model("url", urlSchema)