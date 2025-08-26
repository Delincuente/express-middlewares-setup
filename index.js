import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";

import route from "./routes/index.route.js";

const port = process.env.port;
const app = express();

app.use('/api', route);
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
}); 