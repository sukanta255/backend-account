const express = require("express")
const {UserModel} = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router()

userRouter.get("/",async(req,res)=>{
    try{
        const users = await UserModel.find();
        res.send(users);

    }catch(err){
        console.log(err);
        res.send({"msg":"Problem in Faces"});
    }
})
userRouter.post("/register",async(req,res)=>{
    const {name,gender,dob,email,mobile,initialbalance,adhar,pan} = req.body
    try{
        const user = new UserModel({name,gender,dob,email,mobile,initialbalance,adhar,pan})
        await user.save();
        res.send({"msg":"Account Register Successfully"});

    }catch(err){
        res.send({"msg":"Something went wrong when Account creation"});
        console.log(err);
    }
})

userRouter.patch("/update/:id",async(req,res)=>{
    const payload = req.body
    const id = req.params.id
    const account = await UserModel.findOne({"_id":id})
    try{
        await UserModel.findByIdAndUpdate({"_id":id},payload);
        res.send("Account Updated Successfully");

    }catch(err){
        res.send({"msg":"Something went wrong when Updating Account"});
        console.log(err);
    }
})

userRouter.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    const account = await UserModel.findOne({"_id":id})
    try{
        await UserModel.findByIdAndDelete({"_id":id});
        res.send("Account Deleted Successfully");

    }catch(err){
        res.send({"msg":"Something went wrong when Updating Account"});
        console.log(err);
    }
})

module.exports={
    userRouter
}