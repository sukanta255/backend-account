const express = require("express");
const {connection} = require("./configs/db")
const {userRouter} = require("./routes/User.route");
require("dotenv").config();
const cors = require("cors");

const app = express()
app.use(cors({
    origin: "*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page Masai Bank");
})

app.use("/users",userRouter);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the Database Perfectly");

    }catch(err)
    {
        console.log("Problem with connection")
        console.log(err)
    }
    console.log(`Running at port number ${process.env.port}`);
})
