import express from "express"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from "./config/db.js"
import morgan from 'morgan'

import userRoutes from "./Routes/userRoutes.js"
import passwordRoutes from './Routes/passwordRoutes.js'
import cors from 'cors'

 dotenv.config()
 const port=process.env.PORT || 3000;

 connectDB();

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
    origin:true,
    credentials:true
  }));


app.use("/api/user",userRoutes)
app.use("/api/password",passwordRoutes)

app.get('/',(req,res)=>res.send("server ready"))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})