import URL from "../model/url.js"
import ShortUniqueId from 'short-unique-id';
import "dotenv/config"
export const generateUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl) return res.status(400).json({
            success: false,
            message: "Please Enter URL to shorten it"
        })
        const uid = new ShortUniqueId({ length: 8 });
        const shortId = uid.rnd()
        const shortUrl = `${process.env.BASE_URL}/${shortId}`
        const urlInfo = await URL.create({
            shortId: shortId,
            shortUrl: shortUrl,
            originalUrl: originalUrl,
            visitHistory: []
        })
        res.status(201).json({
            success: true,
            result: urlInfo,
            message: "Short URL generated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error occurred.",
        });
    }

}


export const getGeneratedUrl = async (req, res) => {
    try {
        const shortId = req.params.id;
        const url = await URL.findOneAndUpdate({ shortId },
            {
                $push: {
                    visitHistory: { time: Date.now() }
                }
            },
            { new: true }
        )
        if (!url) return res.status(400).json({
            success: false,
            message: "Id not found"
        })
        return res.redirect(url.originalUrl)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error occurred"
        })
    }
}
