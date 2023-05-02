import express from "express";
import mongoose from "mongoose";
//import dotenv from "dotenv";

import userRouter from "./src/routes/userRoutes";
import blogRouter from "./src/routes/blogRoutes";


const app = express();
//const mongoose = mongoose();

//console.log(process.env.USERNAME)

//dotenv.config({path: __dirname + '/.env' })
app.use(express.json())

app.use("/api/user",userRouter);
app.use("/api/blog",blogRouter);

mongoose.connect(`mongodb+srv://akashleo2009:shitWENTwrong$4@cluster0.f6ikfoc.mongodb.net/test`).then(()=>{
    console.log("MongoDB connected");
    app.listen(3000, ()=>{
        console.log("server is running at port 3000");
    });
    
})
