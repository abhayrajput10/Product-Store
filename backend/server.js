// const express = require('express');    //traditional way
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";  //config. for the deployment

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());  //allows us to accept JSON data in the req.body

app.use("/api/products",productRoutes);

if(process.env.NODE_ENV === "production") {                    // from this line to line 25 this is the config. of our project
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get(/(.*)/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, ()  => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
}); 