import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";
const port = process.env.port;
const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});