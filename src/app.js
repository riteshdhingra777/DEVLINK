import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app=express();





app.use("/hello",(req,res)=>{
    res.send("hello world") 
})


app.use("/",(req,res)=>{
    res.send("devlink server is running")
})



app.listen(process.env.PORT || 3000,()=>{
console.log(`server is running on port ${process.env.PORT}`)
})
















