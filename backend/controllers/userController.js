const usermodel = require('../models/usermodel')


const loginController = async(req,res) => {
    try{
        const {email,password} = req.body
        const user = await usermodel.findOne({email,password})
        if(!user){
            return res.status(404).send('user not found')
        }
        res.status(200).json({
            success:true,
            user,
        })
    }catch (error){
        res.status(400).json({
            success:false,
            error,
        })
    }
};

const registerController = async(req,res) => {
    try{
        const newuser = new usermodel(req.body)
        await newuser.save()
        res.status(201).json({
            success:true,
            newuser,
        })
    }catch (error){
        res.status(400).json({
            success:false,
            error,
        })
    }
};

module.exports = {loginController, registerController};