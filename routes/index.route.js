import express from "express";
const router = express.Router();

import userRoute from "./users.route.js";
import productRoute from "./products.route.js";

router.use('/user', userRoute);
router.use('/product', productRoute);

export default router;