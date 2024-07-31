const User = require('../models/userModel');

exports.registerUser=async(req,res,next)=>{
    const {name,email,password,avatar}=req.body
    const user = await User.create({
        name,
        email,
        password,
        avatar
    });

    res.status(201).json({
        status:true,
        user
     })
}