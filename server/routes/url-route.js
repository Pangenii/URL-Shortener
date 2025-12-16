import express from "express";

import { generateUrl, getGeneratedUrl } from "../controllers/url-controller.js";

const router = express.Router();

router.post("/", generateUrl)

router.get("/:id", getGeneratedUrl)

export default router