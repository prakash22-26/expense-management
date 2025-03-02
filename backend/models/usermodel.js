const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        type:string,
        required:[true,"name is required"]
    },
    email:{
        type:string,
        required:[true,"email is required and unique"],
        unique:true,
    },
    password:{
        type:string,
        required:[true,"password is required"],
    },
},
{timestamps:true}
);

const usermodel = mongoose.model('users',userSchema)
module.exports = usermodel