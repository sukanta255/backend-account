const mongoose = require("mongoose");

const userScheam = mongoose.Schema({
    "name":String,
    "gender":String,
    "dob":String,
    "email":String,
    "mobile":Number,
    "initialbalance":Number,
    "adhar":Number,
    "pan":String
})
const UserModel = mongoose.model("user",userScheam);

module.exports={
    UserModel
}

// "name":"Sukanta Pramanik",
// "gender":"Male",
// "dob":01/01/2000,
// "email":"abc@gmail.com",
// "mobile":1234567891
// "initialbalance":100,
// "adhar":123456789123,
// "pan":"AEDCGBF$D"